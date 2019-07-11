const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../../config/keys");

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
  const {name, phone, date, dateIndex} = req.body;
  const newReserve = new Reserve({
    name,
    phone,
    date,
    dateIndex
  });
  let dayToPick = "";
  if (dateIndex == 0) {
    dayToPick = "firstDay";
  } else if (dateIndex == 1) {
    dayToPick = "secondDay";
  } else if (dateIndex == 2) {
    dayToPick = "thirdDay";
  } else if (dateIndex == 3) {
    dayToPick = "fourthDay";
  } else if (dateIndex == 4) {
    dayToPick = "fifthDay";
  }

  newReserve
    .save()
    .then(() => {
      res.json({
        success: `Reserved successfully for ${date}th by ${name}`,
        name,
        phone,
        date,
        dateIndex
      });
    })
    .then(() => {
      Spaces.findByIdAndUpdate("5d21c3e6c448f92990d563c4", {
        $inc: {[dayToPick]: -1}
      })
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
    const {firstDay, secondDay, thirdDay, fourthDay, fifthDay} = req.body;
    Spaces.findByIdAndUpdate(
      "5d21c3e6c448f92990d563c4",
      {firstDay, secondDay, thirdDay, fourthDay, fifthDay},
      (err, doc) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(doc);
        }
      }
    );
  }
);

router.get("/spaces", (req, res) => {
  Spaces.find().then(items => {
    res.json(items);
  });
});

// Register
// router.post("/admin", (req, res) => {
//   const {email, password} = req.body;
//   const newUser = new User({
//     email,
//     password
//   });

//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, (err, hash) => {
//       if (err) throw err;
//       newUser.password = hash;
//       newUser
//         .save()
//         .then(user => res.json(user))
//         .catch(err => console.log(err));
//     });
//   });
// });

// Login
router.post("/admin", (req, res) => {
  const {email, password} = req.body;

  //find user by email
  User.findOne({email}).then(user => {
    //check for user
    if (!user) {
      return res.status(400).json({email: "email not found"});
    }
    //check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User matched
        const payload = {email: user.email, id: user.id}; // create jwt payload

        // sign token
        jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
          res.json({success: true, token: "Bearer " + token});
        });
      } else {
        return res.status(400).json({error: "رمز عبور نادرست می باشد"});
      }
    });
  });
});

module.exports = router;
