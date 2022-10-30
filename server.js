const mongoose = require('mongoose');
const app = require('./src/app');
const { PORT, DB_HOST } = require('./src/config');


mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
