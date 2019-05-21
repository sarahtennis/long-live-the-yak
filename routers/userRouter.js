import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.status(200).json({ test: "successful" });
});

module.exports = router;
