const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load reserve model
const Reserve = require("../../models/Reserve");
const Spaces = require("../../models/Spaces");
const User = require("../../models/User");

router.get("/test", (req, res) => {
  res.json({msg: "Fuck you sina"});
});

router.get(
  "/all",
  passport.authenticate("jwt", {session: false}),
  (req, res) => {
    Reserve.find().then(items => {
      res.json(items);
    });
  }
);

router.post(
  "/delete",
  passport.authenticate("jwt", {session: false}),
  (req, res) => {
    const {id} = req.body;
    Reserve.findByIdAndRemove(id)
      .then(doc => {
        res.json(doc);
      })
      .catch(err => res.json(err));
  }
);

router.post("/", (req, res) => {
  const {name, phone, day, hour} = req.body;
  const newReserve = new Reserve({
    name,
    phone,
    day,
    hour
  });

  newReserve
    .save()
    .then(() => {
      res.json({
        success: `Reserved successfully for ${day} at ${hour} by ${name}`,
        name,
        phone,
        day,
        hour
      });
    })
    .then(() => {
      Spaces.findOneAndUpdate(
        {date: day},
        {
          $inc: {[hour]: -1}
        }
      )
        .then(() => {
          console.log("updated");
        })
        .catch(err => {
          console.log("not updatedS");
        });
    })
    .catch(err => console.log(err));
});

router.post(
  "/spaces",
  passport.authenticate("jwt", {session: false}),
  (req, res) => {
    console.log(req.body.space);

    Spaces.findOneAndUpdate(
      {date: req.body.date},
      {[req.body.selectedHour]: req.body.space}
    ).then(doc => {
      if (!doc) {
        new Spaces({
          date: req.body.date,
          [req.body.selectedHour]: req.body.space
        })
          .save()
          .then(doc => res.json(doc));
      } else {
        res.json(doc);
      }
    });
  }
);

router.post("/getspace", (req, res) => {
  const {date} = req.body;
  Spaces.find({date}).then(doc => res.json(doc));
});

router.get("/spaces", (req, res) => {
  Spaces.find().then(items => {
    res.json(items);
  });
});

// Register
router.post("/register", (req, res) => {
  const {name, email, password} = req.body;
  const newUser = new User({
    name,
    email,
    password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
  });
});

// Login
router.post("/admin", (req, res) => {
  const {errors, isValid} = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const {email, password} = req.body;

  //find user by email
  User.findOne({email}).then(user => {
    //check for user
    if (!user) {
      errors.email = "کاربر یافت نشد";
      return res.status(400).json(errors);
    }
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User matched
        const payload = {email: user.email, id: user.id, name: user.name}; // create jwt payload

        // sign token
        jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
          res.json({success: true, token: "Bearer " + token});
        });
      } else {
        errors.password = "رمز عبور نادرست می باشد";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
