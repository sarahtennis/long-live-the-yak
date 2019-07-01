import express from "express";
import helmet from "helmet";
import cors from "cors";

import userRouter from "../routers/userRouter.js";

module.exports = server => {
  server.use(express.json());
  server.use(helmet());
  server.use(cors());

  server.use("/user", userRouter);
};
