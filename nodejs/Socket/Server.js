/*
0. 웹 서버(http) 서버 준비
1. client에게 웹 브라우저 (html) 전달
2. 서버 소켓 생성
3. 클라이언트와 연결
*/

//0. 웹 서버 생성
/* http
var http = require('http');
var server = http.createServer(function(req,res){
    res.end('socket.io Sample');
});
server.listen(3000); //포트번호 3000
*/

var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
server.listen(3000);
 


//1. 클라이언트에 html 응답
app.get('/',function(req,res){
    res.sendFile(__dirname + '/WebClient.html');
});


//2. socket.io 서버 생성
var io = require('socket.io')(server);
/*
var Server = require('socket.io');
var io = new Server(httpServer);
*/

//3. client 접속 확인 ->connection event
io.on('connection',function(socket){
    console.log('클라이언트 접속함!!');

    //접속하자마자 끝날 때 까지 처리
    socket.on('disconnect',function(){
        console.log('클라이언트 접속 끊김 ㅠㅠ');
    });

    //3초 간격으로 메시지 보내기
    setInterval(function(){
        console.log('입벌려 메시지 들어간다');
        socket.emit('message','HIII');
    },3000); //setInterval
    

}); //io.on (연결된 클라이언트 대상으로 시행)

/*
클라이언트한테 받기 - object 형식
io.on('howAreYou',function(data){
    var msg = data['message'];
    //아마 Im fine이라고 왔을 듯
});
*/

 /*
    추가 정보 - node.js의 소켓 통신 종류
    1. broadcast 통신 - 나를 제외한 모든 클라이언트에게 데이터 전달
       io.emit('Broadcase Event',[data]) ->socket.io.emit 도 ㄱㄴ
    2. private 통신 - 특정 클라이언트에게만 데이터 전달
        socket.emit('DirectEvent',[data]]) -> 1번 public에서 좀더 추가된 형태
    */ 

