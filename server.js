const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err) => {
  if (err) console.log(`ERROR: connecting to Database. ${err}`);
  else {
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  }
});
