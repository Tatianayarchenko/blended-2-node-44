const express = require('express');
const {
  getAll,
  getById,
  createClient,
  updateStatus,
  updateClient,
  removeClient,
} = require('../controllers/clients');
const wrapper = require('../helpers/wrapper');
const { schemas } = require('../models/clients');
const validator = require('../middlewares/validation');

const router = express.Router();

router.get('/', wrapper(getAll));

router.get('/:id', validator.params(schemas.idSchema), wrapper(getById));

router.post(
  '/',
  validator.body(schemas.addClientSchema),
  wrapper(createClient)
);

router.patch(
  '/:id/status',
  validator.body(schemas.updateStatusSchema),
  validator.params(schemas.idSchema),
  wrapper(updateStatus)
);

router.put(
  '/:id',
  validator.params(schemas.idSchema),
  validator.body(schemas.updateClientSchema),
  wrapper(updateClient)
);

router.delete(
  '/:id',
  validator.params(schemas.idSchema),
  wrapper(removeClient)
);

module.exports = router;
