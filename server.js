import express from "express";
import imageRoutes from "./routes/imageRouter.js";
import mongoose from "mongoose";

let app = express();

app.use(express.json());
let mongodbUri =
  "mongodb+srv://imageupload:imageupload@cluster0.guor3sz.mongodb.net/";
//  routes
app.use("/api/images", imageRoutes);
//Connection to Database
mongoose
  .connect(mongodbUri, {
    dbName: "imageupload",
  })
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Error While Connecting to Database", error));

let port = 2000;
app.listen(port, () =>
  console.log(`port is running on: ${port}\n -> http://localhost:${port}`)
);
