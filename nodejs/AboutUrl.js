/*******************url 개념 ***********************
[URL]
http://opentutorials.org:3000/main?id=HTML&page=12
1. http -> protocol/통신 규칙, 사용자가 서버에 접속할 때 어떤 방식으로 통신할것인가
HyperTextTransportProtocol - 웹브라우저 & 웹서버
ftp (e다른 프로토콜)
2. opentutorials.org ->hostname(domain), 인터넷에 연결되어 있는 커퓨터의 주소
3. 3000 -> port 번호. 한대의 컴퓨터 안에 여러개의 서버가 있음. 어떤 port가 서버와 통신할지
4. main -> path, 컴퓨터 안에 잇는 어떤 디렉토리의 어떤 파일인지
5. id = 어쩌구 저쩌구 -> query string ? 이후 , 값과 값은 &, 이름과 값은 = 로 구분. 웹서버에게 
내가 읽고 싶은 정보 전달.HTML 읽고 싶고 12 페이지 이다.

*/

//우리의 목표: http://localhost:3000/url?id=Javascript으로 입력햇을때 query string에 따라 다른 값을 보여주기
//id가 CSS면 CSS.HTML 파일 보여주도록

/********query String parsing 코드************ */
var http = require('http');
var fs = require('fs');
var url = require('url');
//module 호출 - 노드 js 가 갖고 있는 수많은 기능들을 같은 것끼리 그룹핑

var app = http.createServer(function(request,response){
    //http 모듈 의 creatServer 함수 사용 - 인자: request, response
    //-> 클래스 app 생성
    var _url = request.url; //모듈 요청해서 _url에 url 저장?
    //id=HTML 에서 HTML 은 어디 들어가는걸까? URL 에 들어간다.
    //확인해보즈아
    console.log(_url);
    //?id=HTML 출력됨

    var queryData = url.parse(_url,true).query;
    //쿼리문 파싱해서 저장하긔 - url 모듈 사용, _url에 저장된 데이터 파싱
    console.log(queryData);
    var title = queryData.id;
    //title == 'HTML'
    console.dir(queryData);
    //{id: 'HTML'} -> queryData가 객체이고, 그래서 console.log(queryData.id) 해주면 HTML 만 출력됨
    //만약 ?name=HTML 이면 {name : 'HTML'} 출력, console.log(queryData.name) ``
    if(_url == '/'){
      title = 'Welome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    //템플릿 내용 작성
    var template = `
    <!doctype html>
    <html>
      <head>
        <title>title: ${title}</title>
        <meta>char set = "utf-8"</meta>
      </head>
      <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>

      </body>
    </html>
    `
    response.end(template);
    //사용자에게 전송할 데이터를 생성한다 ->사용자가 접속한 url 에 따라서 다른 파일들을 읽어줌
    //response.end(HTML 파일 이름 확장자 빼고)
    /*원래 강의 내용은 reponse.end(__dirname + url) 이였다. 그러니 하이퍼링크 누르면 다른 html 파일
    들 찾아서 보여주게됨 . 그런데 문제는 response.end(queryData.id) 로 바뀜
    ***id 설정은 a태그에서 함 ****
    이 방식에선 a 태그 -> 쿼리 스트링 확인 이럼 안됨
    쿼리 스트링 설정 -> a태그 -.> 쿼리 스트링의 페이지로..
    쿼리스트링은 index.html을 node로 불러와서 어딘가에서 프로그래머가 확인하는 것이 아닙니다. 
    ***설정된 id는 a태그 있는곳에서 확인 가능 즉 index.html 에서 확인 가능.무작정 id 만치면 어디잇는지 모르니까?
    쿼리스트링을 미리 작성해주어야 합니다. 
    template에서 a태그의 href를 쿼리스트링이 포함되도록 수정한 뒤, 실행하여 나머지 코드를 작성해야 합니다. 
    */
    
});
app.listen(3000);