const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const loginRouter = express.Router();

loginRouter.use(bodyParser.urlencoded({ extended: false }));
loginRouter.use(
  session({
    secret: "mySession",
    cookie: { maxAge: 6000000 },
    resave: true,
    saveUninitialized: false,
  })
);

loginRouter.post("/authen", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if ((username == "admin" && password == "Web999") || (username == "commu" && password == "Cosci7749")) {
    req.session.username = username;
    req.session.password = password;
    req.session.isLoggedIn = true;
    res.redirect("/");
  } else {
    res.redirect("/log-in");
  }
});

module.exports = loginRouter;
