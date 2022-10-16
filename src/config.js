require('dotenv').config();

const { PORT = 3333, DB_HOST = '' } = process.env;

module.exports = { PORT, DB_HOST };
