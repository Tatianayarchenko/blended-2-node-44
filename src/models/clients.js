const { model, Schema } = require('mongoose');

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

const Client = model('client', clientSchema);

module.exports = Client;
