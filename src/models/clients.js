const { model, Schema } = require('mongoose');
const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

const clientSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    surname: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const addClientSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required(),
  status: Joi.boolean().default(true),
});

const idSchema = Joi.object({
  id: Joi.objectId().required(),
});

const updateClientSchema = Joi.object({
  name: Joi.string(),
  surname: Joi.string(),
  email: Joi.string(),
  status: Joi.boolean(),
}).min(1);

const schemas = {
  addClientSchema,
  idSchema,
  updateClientSchema,
}

const Client = model('client', clientSchema);

module.exports = {
  Client,
  schemas,
}
