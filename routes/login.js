var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var pool = mysql.createPool({
	host: '127.0.0.1',//主机地址
	user: 'root',
	password: 'shuang11',
	database: 'webnews',//数据库名称
	port: 3306 //端口号
});

router.post('/zhuce', function(request, response) {
	
})
