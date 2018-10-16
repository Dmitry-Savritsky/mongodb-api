// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')

const app = express();
const config = require('./files/db');
const StateRoute = require('./routes/StateRoute');
const PORT = 4000;

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => {
        console.log('Can not connect to the database' + err)
    });

app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));
app.use('/state', StateRoute);

app.listen(PORT, function () {
    console.log('Your node js server is running on PORT:', PORT);
});