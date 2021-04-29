const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require("path");
const main = require("./views/main.js");
const { db, Page, User } = require("./models");
const userRouter = require("./routes/users.js");
const wikiRouter = require("./routes/wiki.js");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));


app.use("/wiki", wikiRouter);

app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const makeTables = async () => {
  await db.sync();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
};

makeTables();
//   .then(( => {
//   return User.create({name, email})
// }))
