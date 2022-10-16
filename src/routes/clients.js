const express = require("express");
const {
  getAll,
  getById,
  createClient,
  updateStatus,
  updateClient,
  removeClient,
} = require("../controllers/clients");
const wrapper = require("../helpers/wrapper");

const router = express.Router();

router.get("/", wrapper(getAll));

router.get("/:id", wrapper(getById));

router.post("/", wrapper(createClient));

router.patch("/:id/status", wrapper(updateStatus));

router.put("/:id", wrapper(updateClient));

router.delete("/:id", wrapper(removeClient));

module.exports = router;
