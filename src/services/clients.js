const Client = require('../models/clients');

const getAllService = async () => {
  const result = await Client.find();
  return result;
};

const getByIdService = async (id) => {
  const result = await Client.findById(id);
  return result;
};

const createClientService = async () => {};

const updateClientService = async () => {};

const updateStatusService = async () => {};

const removeClientService = async () => {};

module.exports = {
  getAllService,
  getByIdService,
  createClientService,
  updateClientService,
  updateStatusService,
  removeClientService,
};
