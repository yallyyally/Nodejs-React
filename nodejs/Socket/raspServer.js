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


//2. socket.io 서버 생성
var io = require('socket.io')(server);
/*
var Server = require('socket.io');
var io = new Server(httpServer);
*/

//3. client 접속 확인 ->connection event
io.on('connection',function(socket){
    console.log('클라이언트 접속함!!');
   
    //client에 메시지 전송
    socket.emit('serverConnect','welcome to server');
    console.log('클라이언트에 메시지 전송함!');

    //client에 메시지 수신
    socket.on('raspMessage',function(data){
        console.log('카메라(장소): ' + data['cameraid']);
        console.log('사람 수: '+data['people']);
    })
    
    socket.on('disconnect',function(){
        console.log('클라이언트 접속 끊김 ㅠㅠ');
    });
    

}); //io.on (연결된 클라이언트 대상으로 시행)

/*
클라이언트한테 받기 - object 형식
io.on('howAreYou',function(data){
    var msg = data['message'];
    //아마 Im fine이라고 왔을 듯
});
*/
