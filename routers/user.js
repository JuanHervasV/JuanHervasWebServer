const express = require("express");
const { model } = require("mongoose");
const UserController = require("../controllers/user");

const api = express.Router();

api.post("/sign-up", UserController.signUp);
api.post("/sign-in", UserController.signIn);

module.exports = api;