const cloudinary = require('cloudinary').v2

const uploadImage = (file)=>{

    cloudinary.config({

        cloud_name:"draa03bm8",
        api_key:"522643139643729",
        api_secret:"PH6cRQGhCwGZAItqbw_rjmUSTO4"
    })

    cloudinary.uploader.upload(file,(error,result)=>{

    })
}
module.exports={
    uploadImage
}