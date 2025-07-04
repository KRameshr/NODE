const mongoose = require("mongoose");

const connectDB = async (URL) => {
  try {
    await mongoose.connect(URL, {});
    console.log(`MongoseDB is Connected at ${mongoose.connection.name}`);
  } catch (err) {
    console.log("error");
  }
};

module.exports = connectDB;
