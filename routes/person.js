const route = require("express").Router();
const db = require("../db");

route.get("/", (req, res) => {
  db.getAllPersons()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
route.post("/", (req, res) => {
  db.addPerson(req.body.name, req.body.age)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});
module.exports = route;
