const express = require("express");
const path = require("path");
const academicRouter = express.Router();

academicRouter.get("/download/major-1-curriculum", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.download(path.join(__dirname, "../public/docs/academic-1.pdf"));
  } else {
    res.redirect("/log-in");
  }
});

academicRouter.get("/download/major-2-curriculum", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.download(path.join(__dirname, "../public/docs/academic-2.pdf"));
  } else {
    res.redirect("/log-in");
  }
});

academicRouter.get("/download/major-3-curriculum", (req, res) => {
  if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
    res.download(path.join(__dirname, "../public/docs/academic-3.pdf"));
  } else {
    res.redirect("/log-in");
  }
});

module.exports = academicRouter;
