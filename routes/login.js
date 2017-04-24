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
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


function getAllUsers(username,callback){
	pool.getConnection(function(err,connection){
		var sql = 'select username,password,uid from users where username = ?';
		connection.query(sql,[username],function(err,result){
			console.log('result:'+result)
			if(err){
				console.log("getAllUsers Error:"+err.message);
				return;
			}
			connection.release();//释放链接
			callback(err,result)
		})
	})
}
function getUsers(username,pwd,name,tel,qq,email,level,img,callback){
	pool.getConnection(function(err,connection){
		var sql = 'insert into users (username,password,name,tel,email,qq,level,img) values (?,?,?,?,?,?,?,?)';
		connection.query(sql,[username,pwd,name,tel,email,qq,level,img],function(err,result){
			if(err){
				console.log("getAllUsers Error:"+err.message);
				return;
			}
			connection.release();//释放链接
			callback(err,result)
		})
	})
}

//注册
router.post('/register', function(request, response) {
	console.log("进入注册》》》》》》")
	var username = request.body.username,
		pwd = request.body.password,
		name = request.body.name,
		tel = request.body.tel,
		qq = request.body.qq,
		email = request.body.email,
		img = "../images/icon.png",
		level = 0;
	
	getAllUsers(username,function(err,result){
		if(result == '' || result == null){
			getUsers(username,pwd,name,tel,qq,email,level,img,function(err,result){
				console.log("result:"+result)
				if(result.insertId > 0){
					response.send({success:1,data:result})
				}
			})
		}else if(result != '' || result != null){
			response.send({success:2})//用户名已存在
		}else if(err){
			response.send({err:err})//信息搜索错误
		}
	})
	
})

//登陆
router.post('/login', function(request, response) {
	console.log("进入登陆》》》》》")
	var username = request.body.username,
		pwd = request.body.password;
	
	getAllUsers(username,function(err,result){
		if(result.length == 0){
			response.send({success:2})//登陆用户不存在
		}else if(result.length > 0){
			if(result[0].password == pwd){
				response.send({success:1,result:result})//登陆成功
			}else if(result[0].password != pwd){
				response.send({success:3})//登陆用户名与密码不匹配
			}else {
				response.send({success:4})//登陆失败
			}
		}else if(err){
			response.send({err:err})//登陆失败
		}else {
			response.send({success:4})//登陆失败
		}
	})
	
})

//个人资料更改
function getUserG(uid,callback){
	pool.getConnection(function(err,connection){
		var sql = 'select * from users where uid = ?';
		connection.query(sql,[uid],function(err,result){
			console.log('result:'+result)
			if(err){
				console.log("getAllUsers Error:"+err.message);
				return;
			}
			connection.release();//释放链接
			callback(err,result)
		})
	})
}
function getUsersG (username,pwd,name,tel,email,qq,id,callback){
	pool.getConnection(function(err,connection){
		var sql = "update users set username = ?,password = ?,name = ?,tel = ?,qq = ?,email = ? where uid = ?";
		connection.query(sql,[username,pwd,name,tel,qq,email,id],function(err,result){
			if(err){
				console.log("getAllUsers Error:"+err.message);
				return;
			}
			connection.release();//释放链接
			callback(err,result)
		})
	})
}
router.get('/change', function(request, response) {
	console.log("进入列表》》》》》")
	var id = request.query.uid;
	
	getUserG(id,function(err,result){
		console.log("result:"+result)
		if(result.length > 0){
			response.send({success:1,result:result})//用户存在
		}else if(err) {
			response.send({err:err})//查询错误
		}else {
			response.send({success:3})//查无数据
		}
	})
	
})
router.post('/change', function(request, response) {
	console.log("进入修改》》》》》")
	var id = request.body.uid,
		username = request.body.username,
		pwd = request.body.password,
		name = request.body.name,
		tel = request.body.tel,
		qq = request.body.qq,
		email = request.body.email;
	
	getUsersG(username,pwd,name,tel,email,qq,id,function(err,result){
		console.log("result:"+result)
		if(result.changedRows > 0){
			response.send({success:1})//修改成功
		}else if(err){
			response.send({err:err})//修改错误
		}else {
			response.send({success:3})//无修改项
		}
	})
	
})

//发布信息
function getPublish(category, title, content, time, personid, clicks, audit, callback) {
	pool.getConnection(function(err, connection) {
		var sql = 'insert into newlist (category,title,content,time,personid,clicks,audit) values (?,?,?,?,?,?,?)';
		connection.query(sql, [category, title, content, time, personid, clicks, audit], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}

function getUserRelease(uid, newid, callback) {
	pool.getConnection(function(err, connection) {
		var sql = "update users set releases = ? where uid = ?";
		connection.query(sql,[newid,uid], function(err, result) {
			if(err) {
				console.log("getAllUsers Error:" + err.message);
				return;
			}
			connection.release(); //释放链接
			callback(err, result)
		})
	})
}
router.post('/publish', function(request, response) {
	console.log("进入发布》》》》》")
	var category = request.body.category,
		title = request.body.title,
		content = request.body.content,
		time = request.body.time,
		personid = Number(request.body.personid),
		clicks = request.body.clicks,
		audit = request.body.audit;

	console.log(category, title, content, time, personid, clicks, audit)
	getPublish(category, title, content, time, personid, clicks, audit, function(err, result) {
		if(result.insertId > 0) {
			var newid = result.insertId;
			getUserG(personid,function(err, results){
				var releases = results[0].releases + "-" + newid;
				if(results.length > 0){
					getUserRelease(personid, releases, function(err, result) {
						if(result.changedRows > 0) {
							response.send({success: 1,data: result}) //添加发布成功
						} else if(err) {
							response.send({err: err}) //添加发布错误
						} else {
							response.send({success: 3}) //添加发布错误
						}
					})
				}else if(err) {
					response.send({err:err})//查询错误
				}else {
					response.send({success:3})//查无数据
				}
			})
		} else if(err) {
			response.send({success: 2}) //添加失败
		} else {
			response.send({	success: 2}) //添加失败
		}
	})

})

module.exports = router;
