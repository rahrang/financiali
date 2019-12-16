require('dotenv').config();

import * as express from 'express';
import * as bodyParser from 'body-parser';

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
