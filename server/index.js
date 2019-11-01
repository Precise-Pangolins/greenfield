const express = require("express");
const morgan = require("morgan");
const Parser = require("body-parser");
const app = express();
const compression = require("compression ")
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static("dist"));
app.use(morgan("tiny"));
app.use(Parser.json());
app.use(compression());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
