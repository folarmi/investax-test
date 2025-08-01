const express = require("express");
const router = express.Router();
const UserLog = require("../models/UserLog");

// GET all logs
router.get("/", async (req, res) => {
  const logs = await UserLog.find().sort({ loginTime: -1 });
  res.json(logs);
});

// DELETE a log by ID
router.delete("/:id", async (req, res) => {
  await UserLog.findByIdAndDelete(req.params.id);
  res.json({ message: "Log deleted" });
});

module.exports = router;
