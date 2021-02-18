const { json } = require("express");
jwt=require("jwt-simple")
mongo=require("mongojs");
module.exports.conn=mongo("mongodb://localhost:27017/db_ecom");
