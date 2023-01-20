const multer = require("multer");

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, __dirname + '/uploads/')
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, 'hi')
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50 * 100000000,
  },
});
module.exports = upload;
