const express = require("express");
const bodyParser = require("body-parser");
const handyStorage = require("handy-storage");
const path = require("path");
const contactRouter = express.Router();

contactRouter.use(express.static(path.join(__dirname, "../public")));

const storage = new handyStorage({
    beautify: true
});

storage.connect('./information.json');

contactRouter.post("/store-data", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    if (name != "" && email != "" && subject != "" && message != "") {
        res.sendFile(path.join(__dirname, "../public/html/success.html"));

        storage.setState({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
      } else {
        res.redirect("/contact");
    }
});



 
module.exports = contactRouter;
