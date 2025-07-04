const mongoose = require("mongoose");

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Hero = mongoose.model(
  "Heroe",
  new Schema({
    id: ObjectId,
    title: String,
    fistName: String,
    lastName: String,
    email: String,
    city: String,
  })
);

module.exports.Hero = Hero;
// module.exports = Hero;
// module.exports = { Hero, mongoose };
