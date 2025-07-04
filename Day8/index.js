require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");
const app = express();
const { SampleGetOne, SampleGetTwo } = require("./controller/usercon");

connectDB(process.env.MONGOOB_URI);

const userRoutes = require("./routes/useroutes");
const authoroute = require("./routes/authroutes");

// app.get("/SampleOne", SampleGetOne);
// app.get("/SampleTwo", SampleGetOne);

app.use("/user", userRoutes);
app.use("/auth", authoroute);

app.listen(3009, "localhost", (err) => {
  if (err) console.log(err);
  else console.log("the is running at " + `${3009}`);
});
