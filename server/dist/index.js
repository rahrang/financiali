"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.listen(PORT, () => {
    console.log(`express server listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map