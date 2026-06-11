const express = require("express");
const useCont = require("../controller/user.controller");

const route = express.Router();
route.post("/", useCont.createUser); 
route.post("/log",useCont.login)
module.exports = route;
