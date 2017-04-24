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
		var sql = 'select * from newlist where category = ? and audit = ?';
		connection.query(sql, [category,1], function(err, result) {
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
	var category = Number(request.query.category);

	getListF(category, function(err, result) {
		console.log("result:"+result)
		if(result.length > 0) {
			response.send({
					success: 1,
					list: result
				}) //列表分类不存在
		} else if(result.length == 0) {
			response.send({
					success: 2
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

//模糊搜索
function getNewlistSearch(keyword,callback){
	pool.getConnection(function(err, connection) {
		var sql = "select * from newlist where title like ? or content like ?";
		connection.query(sql, ["%"+keyword+"%","%"+keyword+"%"], function(err, result) {
			console.log("内容："+result)
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}
router.get('/search', function(request, response) {
	console.log("进入搜索》》》》》》")
	var keyword = request.query.keyword;
	getNewlistSearch(keyword, function(err, result) {
		console.log("result:" + result)
		if(result){
			response.send({success:1,data:result})
		}
	})
})

//获取待审核列表
function getNewlistAudit(audit,callback){
	pool.getConnection(function(err, connection) {
		var sql = 'select * from newlist where audit = ?';
		connection.query(sql, [audit], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}
router.get('/audit', function(request, response) {
	console.log("进入待审核列表》》》》》》")
	var audit = 0;
	getNewlistAudit(audit, function(err, result) {
		console.log("result:" + result)
		if(result.length > 0){
			response.send({success:1,data:result})
		}else if(err) {
			response.send({err: err})
		}else {
			response.send({success:2})
		}
	})
})

//修改审核项
function getAuditG(audit,newid,callback){
	pool.getConnection(function(err, connection) {
		var sql = "update newlist set audit = ? where newid = ?";
		connection.query(sql, [audit, newid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}
router.post('/audit', function(request, response) {
	console.log("进入修改审核项》》》》》》")
	var audit = request.body.audit,
		newid = request.body.newid;
	getAuditG(audit,newid, function(err, result) {
		if(result.changedRows > 0) {
			response.send({
				success: 1
			}) //添加发布成功
		} else if(err) {
			response.send({
				err: err
			}) //添加发布错误
		} else {
			response.send({
				success: 3
			}) //添加发布错误
		}
	})
})







//收藏
//function getNewlistCollect(collect,callback){
//	pool.getConnection(function(err, connection) {
//		var sql = "select * from newlist where newid = ?";
//		connection.query(sql, [collect], function(err, result) {
//			console.log("内容："+result)
//			if(err) {
//				console.log("getAllUsers Error:" + err.message);
//				return;
//			}
//			connection.release(); //释放链接
//			callback(err, result)
//		})
//	})
//}
//router.get('/collect', function(request, response) {
//	console.log("进入收藏》》》》》》")
//	var collect = request.query.collect;
//	console.log('collect:'+collect)
//	
//	var data = [];
//	for(var i=0; i<collect.length; i++){
//		getNewlistCollect(collect[i], function(err, result) {
//			if(result){
//				response.send({data:result})
//			}
//		})
//	}
//	
//})




module.exports = router;