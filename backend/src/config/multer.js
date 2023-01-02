const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '../../ecommerce-s1-g11/backend/src/uploads')
//     // C:\Users\Ulver\Desktop\Proyectos\Hunteando\ecommerce-s1-g11\backend\src\uploads
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   },
// })

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ecommerceMelindaMuriel",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

// validación
// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/png"
//   ) {
//     cb(null, true);
//   } else {
//     cb({ message: "Unsupported File Format" }, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1024 * 1024 },
//   fileFilter: fileFilter,
// });

const upload = multer({
  dest: "./src/utilidades/imagenesMulter",
  // storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

module.exports = upload;
