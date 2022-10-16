const express = require("express");
const {
  getAll,
  getById,
  createClient,
  updateStatus,
  updateClient,
  removeClient,
} = require("../controllers/clients");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", createClient);

router.patch("/:id/status", updateStatus);

router.put("/:id", updateClient);

router.delete("/:id", removeClient);

module.exports = router;
