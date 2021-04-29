const router = require("express").Router();
const userPages = require("../views/userPages.js");
const userList = require("../views/userList.js");

router.get("/", (req, res) => {
  res.send(userList(user));
});

router.get("/:id", (req, res) => {
  res.send(userPages(user, pages));
});

module.exports = router;
