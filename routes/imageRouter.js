import express from "express";
import { uploadSingleImage } from "../middlewares/multer.js";
let router = express.Router();

router.get("/", (req, res) => {
  res.send("Image Upload");
});

//
router.post("/", uploadSingleImage, (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "No Image Uploaded",
    });
  } else {
    return res.status(200).json({
      message: "Image Uploaded Successfully",
      file: req.file,
    });
  }
});

export default router;
