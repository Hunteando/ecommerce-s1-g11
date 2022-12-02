const cloudinary = require('cloudinary')
const { cloud } = require('./environment')

cloudinary.config({
  api_key: cloud.apiKey,
  cloud_name: cloud.cloudName,
  api_secret: cloud.apiSecret,
  secure: true,
})

exports.uploads = (file, folder) => {
  return new Promise((resolve, reject) => {
    try {
      cloudinary.uploader.upload(
        file,
        (result) => {
          resolve({
            url: result.url,
            id: result.public_id,
          })
        },
        {
          resourse_type: 'auto',
          folder: folder,
        }
      )
    } catch (error) {
      reject('Error: ', error)
    }
  })
}
