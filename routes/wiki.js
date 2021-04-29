const router = require("express").Router();
const main = require("../views/main.js");
const { addPage } = require("../views/addPage.js");
const { Page } = require("../models");
const express = require("express");

const app = express();

router.get("/", async (req, res) => {
  res.send(main());
});
app.use(express.json());

app.post("/", (req, res, next) => {
  req.body;
  res.json(req.body);
});

router.get("/add", async (req, res) => {
  res.send(addPage());
});

// router.post("/", async (req, res, next) => {
//   res.redirect(`/${postId}`);
// });

router.get("/:id", async (req, res) => {
  res.send(wikipage(page, author));
});
module.exports = router;
