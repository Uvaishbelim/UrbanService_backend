const cloudinary = require("cloudinary").v2;

const uploadImage = async (file) => {
  cloudinary.config({
    cloud_name: "drjysylbp",
    api_key: "251729489844781",
    api_secret: "3Zdd0sHd9t380zjjgLevO4YNihw",
  });

  //   cloudinary.uploader.upload(file, (error, result) => {});
  // const result = await cloundanry.uploader.upload(file);
  // return result;

    const result = await cloudinary.uploader.upload(file);
    return result;
};
module.exports = {
  uploadImage,
};
