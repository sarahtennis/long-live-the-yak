import express from "express";
import configMiddleware from "./config/middleware.js";

const app = express();
configMiddleware(app);

app.listen(3000, () => {
  console.log("----- Listening on port 3000 -----");
});
