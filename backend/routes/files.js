const router = require("express").Router();
let File = require("../models/file.model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myfile");

router.route("/upload").post((req, res) => {
  upload(req, res, () => {
    if (req.files === null) {
      return res.status(400).json({ msg: "No File Uploaded" });
    }
    const file = new File();
    file.meta_data = req.file;
    file.save().then(() => {
      res.send({ message: "Uploaded Successfully" });
    });
  });
});

router.route("/").get((req, res) => {
  File.find()
    .then((files) => res.json(files.meta_data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
