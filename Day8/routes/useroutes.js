const express = require("express");
const Route = express.Router();
const { SampleGetOne, SampleGetTwo } = require("../controller/usercon");
const auth = require("../Middleware/autoMiddleware");

Route.use(express.json());
Route.use(express.urlencoded({ extended: true }));
Route.post("/update-user", auth, updateUser);
module.exports = Route;
