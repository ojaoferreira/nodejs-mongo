const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.set(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.set(bodyParser.json());

const PORT = process.env.PORT || 3333;

require('./src/index')(app);

app.listen(PORT, () => console.log(`Express started on port ${PORT}`));