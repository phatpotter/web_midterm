const express = require("express");
const path = require("path");
const loginRouter = require("./log-in-router");
const academicRouter = require("./academic-router");
const contactRouter = require("./contact-router");
const mainRouter = express.Router();

mainRouter.use(express.static(path.join(__dirname, "../public")));
mainRouter.use(loginRouter);
mainRouter.use(academicRouter);
mainRouter.use(contactRouter);

mainRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

mainRouter.get("/academic", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.sendFile(path.join(__dirname, "../public/html/academic.html"));
  } else {
    res.redirect("/log-in");
  }
});

mainRouter.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/gallery.html"));
});

mainRouter.get("/faculties", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/faculties.html"));
});

mainRouter.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
});

mainRouter.get("/log-in", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/");
  }

  res.sendFile(path.join(__dirname, "../public/html/log-in.html"));
});

mainRouter.get("/log-out", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = mainRouter;
