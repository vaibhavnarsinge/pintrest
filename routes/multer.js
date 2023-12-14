const multer = require('multer');
const { v4: uuidv4 } = require('uuid'); // Corrected import statement
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination folder for uploaded files
    cb(null, './public/images/uploads');
  },
  filename: function (req, file, cb) {
    // Define the filename for uploaded files

    const uniquefilename = uuidv4();
    cb(null, uniquefilename+path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
