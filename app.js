const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require("path");
const main = require("./views/main.js");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send(main());
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
