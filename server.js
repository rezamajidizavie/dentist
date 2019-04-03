const express = require("express");
const app = express();
const path = require("path");
let port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
