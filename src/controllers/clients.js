const services = require('../services/clients');

const getAll = async (req, res) => {
  const clients = await services.getAllService();
  res.json({ clients });
};
const getById = async (req, res) => {
  const { id } = req.params;
  const client = await services.getByIdService(id);
  client
    ? res.json({ client })
    : res.status(404).json({ message: 'Not found' });
};

const createClient = async (req, res) => {
  res.sendStatus(250);
};

const updateClient = async (req, res) => {
  res.sendStatus(250);
};

const updateStatus = async (req, res) => {
  res.sendStatus(250);
};

const removeClient = async (req, res) => {
  res.sendStatus(250);
};

module.exports = {
  getAll,
  getById,
  createClient,
  updateClient,
  updateStatus,
  removeClient,
};
