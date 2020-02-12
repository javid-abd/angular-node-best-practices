const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.json({
    message: 'Sudo greets!'
  });
});

app.use('/api/v1/users', require('./api/users'));

const currentYearAsPort = new Date().getFullYear();
const port = process.env.PORT | currentYearAsPort;

app.listen(2020, _ => console.log(`server running on port ${port}`));
