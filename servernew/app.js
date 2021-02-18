var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
bp=require("body-parser");
var cors= require("cors");
oid=require("mongojs").ObjectID
var indexRouter = require('./routes/index');
var categoryRouter=require('./routes/admin/category');
var brandRouter=require('./routes/admin/brand');
var subCategoryRouter=require('./routes/admin/subCategory');
var subSubCategoryRouter=require('./routes/admin/subSubCategory');
var adminAuthRouter=require('./routes/admin/adminauth');
var productRouter=require('./routes/admin/product');
var userAuthRouter=require("./routes/user/userauth")
//var userRegRouter=require("./router/user/userauth")
var uploadFilePath=require("./routes/admin/upload")
var fileuploads=require("express-fileupload")

var app = express();
app.use(bp.json());
app.use(fileuploads())
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/categoryPath',categoryRouter);
app.use('/brandPath',brandRouter);
app.use('/subCategoryPath',subCategoryRouter);
app.use('/subSubCategoryPath',subSubCategoryRouter);
app.use('/adminAuthPath',adminAuthRouter);
app.use('/productPath',productRouter);
app.use("/userAuthPath",userAuthRouter)
app.use("/userRegistrationPath",userAuthRouter)
app.use("/userActivePath",userAuthRouter)
app.use("/uploadFileRef",uploadFilePath)


// catch 404 and forward to error handler//
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
