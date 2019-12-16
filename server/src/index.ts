require('dotenv').config();

import * as express from 'express';
import * as bodyParser from 'body-parser';

import models from './data';

try {
  models.User.create({
    first_name: 'jane',
    last_name: 'doe',
    email: 'janedoe1@gmail.com',
  });
} catch (e) {
  console.log(e.message);
}

const PORT = process.env.PORT || 8000;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(PORT, () => {
  console.log(`express server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Financiali Server!');
});
