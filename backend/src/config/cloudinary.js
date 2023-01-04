const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// const { cloud } = require("./environment");

// cloudinary.config({
//   api_key: cloud.apiKey,
//   cloud_name: cloud.cloudName,
//   api_secret: cloud.apiSecret,
//   secure: true,
// })

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ecommerceMelindaMuriel",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

// exports.uploads = (file, folder) => {
//   return new Promise((resolve, reject) => {
//     try {
//       cloudinary.uploader.upload(
//         file,
//         (result) => {
//           resolve({
//             url: result.url,
//             id: result.public_id,
//           });
//         },
//         {
//           resourse_type: "auto",
//           folder: folder,
//         }
//       );
//     } catch (error) {
//       reject("Error: ", error);
//     }
//   });
// };

module.exports = { storage, cloudinary };
