var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'shuang11',
	database: 'webnews',
	port: 3306
});

router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//获取分类列表
function getListF(category, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from newlist where category = ?';
		connection.query(sql, [category], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

router.get('/list', function(request, response) {
	console.log("列表进入成功》》》》》")
	var category = request.query.category;

	getListF(category, function(err, result) {
		if(result.length == 0) {
			response.send({
					success: 2
				}) //列表分类不存在
		} else if(result.length > 0) {
			response.send({
					success: 1,
					list: result
				}) //列表获取成功
		} else if(err) {
			response.send({
					err: err
				}) //列表获取错误
		} else {
			response.send({
					success: 3
				}) //列表获取错误
		}
	})

})

//点击增加点击量
function getListS(newid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'select * from newlist where newid = ?';
		connection.query(sql, [newid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, clicks)
		})
	})
}

function getListG(clicks, newid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = "update newlist set clicks = ? where newid = ?";
		connection.query(sql, [clicks, newid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}
router.post('/clicks', function(request, response) {
	console.log("列表进入成功》》》》》")
	var newid = request.body.newid;

	getListS(newid, function(err, result) {
		var clicks = result[0].clicks;
		var result = result + 1;
		if(result.uid > 0) {
			response.send({success: 1,data: result})
			getListG(result, newid, function(err, result) {
				if(result.changedRows > 0) {
					console.log("修改成功") //修改成功
				} else if(err) {
					console.log(err) //修改错误
				} else {
					console.log("修改失败") //无修改项
				}
			})
		} else if(err) {
			response.send({
					err: err
				}) //数据获取错误
		} else {
			response.send({
					success: 3
				}) //数据获取错误
		}
	})

})



module.exports = router;