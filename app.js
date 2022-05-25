const createError = require("http-errors");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

// router
var postsRouter = require('./routes/posts');
var userRouter = require('./routes/user');

var app = express();

//DB連線（使用預設檔案 index）
require('./connections');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * 非同步程式/未捕捉到的 catch
 */
 process.on("unhandledRejection", (err, promise) => {
  console.error("漏洞：未捕捉到的 rejection：", promise, "原因：", err);
  // 記錄於 log 上
});

module.exports = app;
