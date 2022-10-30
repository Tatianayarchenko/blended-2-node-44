const services = require("../services/clients");

const getAll = async (req, res) => {
  const { filter } = req.query;
  const clients = await services.getAllService(filter);
  res.json({ clients });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const client = await services.getByIdService(id);
  client
    ? res.json({ client })
    : res.status(404).json({ message: "Not found" });
};

const createClient = async (req, res) => {
  const client = await services.createClientService(req.body);
  res.json({
    client,
  });
};

const updateClient = async (req, res) => {
  const { id } = req.params;

  const client = await services.updateClientService(id, req.body);
  client
    ? res.json({ client })
    : res.status(404).json({ message: "Not found" });
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const client = await services.updateStatusService(id, req.body);
  client
    ? res.json({ client })
    : res.status(404).json({ message: "Not found" });
};

const removeClient = async (req, res) => {
  const { id } = req.params;
  const client = await services.removeClientService(id);
  client
    ? res.json({ client })
    : res.status(404).json({ message: "Not found" });
};

module.exports = {
  getAll,
  getById,
  createClient,
  updateClient,
  updateStatus,
  removeClient,
};
