const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require("path");
const main = require("./views/main.js");
const {db, Page, User} = require('./models')

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send(main());
});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


const makeTables = async () => {
  await db.sync();


  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
  })
}

makeTables();
//   .then(( => {
//   return User.create({name, email})
// }))

