const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());
const { API_VERSION }= require('./config');

//Load routings
const authRoutes = require('./routers/auth');
const userRoutes = require('./routers/user');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Configure Header HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


// Router Basic

app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;