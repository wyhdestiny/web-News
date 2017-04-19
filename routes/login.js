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
		var sql = 'select * from users where username = ?';
		connection.query(sql,[username],function(err,result){
			if(err){
				console.log("getAllUsers Error:"+err.message);
				return;
			}
			connection.release();//释放链接
			callback(err,result)
		})
	})
}
function getUsers(username,pwd,name,tel,qq,email,level,callback){
	pool.getConnection(function(err,connection){
		var sql = 'insert into users (username,password,name,tel,email,qq,level) values (?,?,?,?,?,?,?)';
		connection.query(sql,[username,pwd,name,tel,email,qq,level],function(err,result){
			if(err){
				console.log("getAllUsers Error:"+arr.message);
				return;
			}
			connection.release();//释放链接
			callback(err,result)
		})
	})
}

router.post('/register', function(request, response) {
	console.log("进入成功》》》》》》")
	var username = request.body.username,
		pwd = request.body.password,
		name = request.body.name,
		tel = request.body.tel,
		qq = request.body.qq,
		email = request.body.email,
		level = request.body.level;
	
	getAllUsers(username,function(err,result){
		if(result == '' || result == null){
			getUsers(username,pwd,name,tel,qq,email,level,function(err,result){
				console.log("result:"+result)
				if(results.insertId > 0){
					response.send({success:1,data:result})
				}
			})
		}else if(result != '' || result != null){
			response.send({success:2})//用户名已存在
		}else if(err){
			response.send({success:3})//信息搜索错误
		}
	})
	
})


module.exports = router;
