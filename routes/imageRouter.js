import express from "express";
import { uploadSingleImage } from "../middlewares/multer.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs/promises";
let router = express.Router();

router.get("/", (req, res) => {
  res.send("Image Upload");
});

//
router.post("/", uploadSingleImage, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No Image Uploaded",
      });
    } else {
      // sending data to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "imageUpload",
      });
      // deleting local file
      fs.unlink(req.file.path);
      return res.status(200).json({
        message: "Image Uploaded Successfully",
        imageUrl: result.secure_url,
        public_id: result.public_id,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Image upload failed",
    });
  }
});

export default router;
