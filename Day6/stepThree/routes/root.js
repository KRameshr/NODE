const express = require("express");
const Hero = require("../models/models").Hero;
// const Hero = require("../models/models");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("home.pug");
});
routes.post("/data", (req, res) => {
  let hero = new Hero(req.body);
  hero
    .save()
    .then((dres) =>
      res.status(200).send({ message: dres.title + "hero added" })
    )
    .catch((dberr) => res.status(500).send({ dberr: "Error" }));
});
routes.get("/data", (req, res) => {
  Hero.find()
    .then((dbres) => res.send(dbres))
    .catch((err) => console.log(err));
});

routes.get("/updata/:hid", (req, res) => {
  Hero.findById(req.params.hid)
    .then((dbres) => res.status(200).send(dbres))
    .catch((err) => console.log(err));
});
routes.post("/updata/:hid", (req, res) => {
  Hero.findByIdAndUpdate(req.params.hid, {
    title: req.body.title,
    fistName: req.body.fistName,
    lastName: req.body.lastName,
    email: req.body.email,
    city: req.body.city,
  })
    .then((dbres) => {
      console.log(dbres);
      res.status(200).send({ message: "hero updated" });
    })
    .catch((err) => console.log(err));
});

routes.delete("/delete/:hid", (req, res) => {
  Hero.findByIdAndDelete(req.params.hid)
    .then((dbres) => {
      console.log(dbres);
      res.status(200).send({ message: "hero deleted" });
    })
    .catch((err) => console.log(err));
});

module.exports = routes;
