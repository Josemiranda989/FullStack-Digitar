const multer = require("multer");
const path = require("path");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/products"));
  },
  filename: (req, file, cb) => {
    cb(null, "prod" + "-" + Date.now() + path.extname(file.originalname));
  },
});
module.exports = multer({ storage: storage });
