const express = require('express');
const path = require("path");
const mainRouter = require('./routes/main-router');
const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(mainRouter);

app.use((req, res, error) => {
  res.sendFile(path.join(__dirname, "/public/html/404.html"));
});

app.listen(5005, () => {
    console.log("Listening on port 5005");
});
