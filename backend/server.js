const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const usersRouter = require("./routes/users");
const filesRouter = require("./routes/files");

const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/users", usersRouter);
app.use("/files", filesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
