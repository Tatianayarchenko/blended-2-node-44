const { Client } = require("../models/clients");

const getAllService = async (filter) => {
  const filteredArray = filter.split("|");
  const [, name, , surname, , email] = filteredArray;

  const result = await Client.find({
    name: { $regex: new RegExp(name, "i") },
    surname: { $regex: new RegExp(surname, "i") },
    email: { $regex: new RegExp(email, "i") },
    // TODO: find another method for realization filter (like match)
  });
  return result;
};

const getByIdService = async (id) => {
  const result = await Client.findById(id);
  return result;
};

const createClientService = async (body) => {
  const result = await Client.create(body);
  return result;
};

const updateClientService = async (id, body) => {
  const result = await Client.findByIdAndUpdate(id, body, { new: true });
  return result;
};

const updateStatusService = async (id, body) => {
  const result = await Client.findByIdAndUpdate(id, body, { new: true });
  return result;
};

const removeClientService = async (id) => {
  const result = await Client.findByIdAndRemove(id);
  return result;
};

module.exports = {
  getAllService,
  getByIdService,
  createClientService,
  updateClientService,
  updateStatusService,
  removeClientService,
};
