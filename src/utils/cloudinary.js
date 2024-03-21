import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configures Cloudinary with the provided environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Uploads the local file to Cloudinary with auto resource type detection
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("file has been uploaded successfully", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (err) {
    // Deletes the local file if an error occurs during the upload process
    fs.unlinkSync(localFilePath);  // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};
