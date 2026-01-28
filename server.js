import express from "express";
import imageRoutes from "./routes/imageRouter.js";
let app = express();

app.use(express.json());

//  routes
app.use("/api/images", imageRoutes);





let port = 8000;
app.listen(port, () =>
  console.log(`port is running on: ${port}\n -> http://localhost:${port}`)
);
