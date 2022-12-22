const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // for environment variables
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()) // (cross-origin resource sharing) to avoid cors error
const port = 4000;
// mongoDB connection
mongoose.set("strictQuery", false);
const uri = "mongodb+srv://parvesh:parvesh@cluster0.26rledr.mongodb.net/Todo";
async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("strictQuery", false);
    console.log("Scuessfully Connected to database");
  } catch (error) {
    console.log(error);
  }
}
connect();
app.use("/home", require("./routes/home"));
app.use("/home", require("./routes/addTodo"));
app.use("/home", require("./routes/modifyTask"));
app.use("/home", require("./routes/deleteTask"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
