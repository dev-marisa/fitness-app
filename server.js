require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
port = process.env.PORT || 8000;

app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING)
    .then( () => console.log('Connected to DB'))
    .catch( err => console.error(err));

require('./server/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));