const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const formatLogger = app.get("env") === "development" ? "dev" : "short";

const clientsRoute = require("./routes/clients");

app.use(cors());
app.use(express.json());
app.use(logger(formatLogger));

app.use("/api/clients", clientsRoute);

app.use((_, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, _, res, __) => {
  console.log(err);
  const { status = 500, message = "Server internal error" } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;
