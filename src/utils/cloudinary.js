import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configures Cloudinary with the provided environment variables
cloudinary.config({
 cloud_name: process.env.CLOUDINARY_cloud_name,
 api_key: process.env.CLOUDINARY_api_key,
 api_secret: process.env.CLOUDINARY_api_secret,
});

export const uploadOnCloudinary = async (localFilePath) => {
 try {
   if (!localFilePath) return null; 

   // Uploads the local file to Cloudinary with auto resource type detection
   const response = await cloudinary.uploader.upload(localFilePath, {
     resource_type: "auto",
   });

   console.log("file has been uploaded successfully", response.url);


   return response;
 } catch (err) {
   // Deletes the local file if an error occurs during the upload process
   fs.unlinkSync(localFilePath);
 }
};

