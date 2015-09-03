//2015 6월
//FINAL version
//index3.html이랑~

var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var connection = mysql.createConnection({
	host: '127.0.0.1',
	port: 3306,
	user: 'yskoh',
	password: '1234',
	database: 'wpi',
});

app.use(bodyParser.json()); // for parsing application/json 포스트로 받은 내용 파싱하기 위해
app.use(bodyParser.urlencoded({ extended: true }));

app.listen('8888', function(req, res){
	console.log("server started on port 8888");
});

app.use(logger('dev'));


app.use('/lib', express.static(path.join(__dirname,"lib")));
app.use(express.static(path.join(__dirname,"public")));
//nodemon을 실행시킨 위치의 파일이 root이다.

// app.get('/', function(req, res){
// 	fs.readFile("wpiNew2.html", function(error, data) {
// 		res.writeHead(200, {"Content-Type": "text/html"});
// 		res.end(data);
// 	});
// });

app.get('/', function(req, res){
	fs.readFile("index3.html", function(error, data) {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(data);
	});
});

app.get('/description', function(req,res){
	fs.readFile("description2.html", function(error, data){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(data);
	});
});

app.post('/', function(req,res){
	// console.log(req.body.userid);
	var results = {
		// 잠깐!! post요청의 parameter를 req.body.{html에서 설정한 name}로 받아온다.
		// '{mysql 테이블의 column 이름과 동일해야 함}': parameter
		'name': req.body.name,
		'email': req.body.email,
		'me': req.body.selectionsCopy,
		'others': req.body.selectionsCopy2
	};

	console.log(results);
	var str = 'insert into users set ?';
	//위의 str을 갖고 query를 만들고 실행.
	//? 자리에 user object를 넣는다
	var query = connection.query(str, results, function(err,result) {
		if (err) {
			//!!! 여기서는 에러 메세지만 출력하고 에러 처리는 하지 않아요(빠른 테스트를 위해서!)
			console.log(err);
		}
		// console.log(query);
		//뒤에 sucess를 달고 status code는 200코드를 보낸다. 
		// res.send(200, 'success');
		// res.redirect('/');
	});
	//*****만약에 없는 결과이면 리턴. 있는 거면 들어가기
});