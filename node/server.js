require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.json({
    message: 'Sudo greets!'
  });
});

app.use('/api/v1/users', require('./api/users'));

(async function connect() {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.log(err);
  }

  const currentYearAsPort = new Date().getFullYear();
  const port = process.env.PORT | currentYearAsPort;
  app.listen(2020, _ => console.log(`server running on port ${port}`));
})();
