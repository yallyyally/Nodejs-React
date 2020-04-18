var http = require('http');
var fs = require('fs');
var url = require('url');
//module 호출 - 노드 js 가 갖고 있는 수많은 기능들을 같은 것끼리 그룹핑

var app = http.createServer(function(request,response){

    var _url = request.url; //모듈 요청해서 _url에 url 저장?
    var queryData = url.parse(_url,true).query;

    console.log(queryData);
    var title = queryData.id;
    if(_url == '/'){  
      /*
      _url =  '/index.html';
      ->h1의 a 태그를 /로 한 이유, id 아무것도 입력 안햇을때
      */
     title = 'Welcome';
     //이건 di 가 웰컴이된다?
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
      <title>WEB1 - ${queryData.id }</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=Javascript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>
    `
    //주소의 id가 뭐냐에 따라서 그 상단 탭이랑 h2 태그 내용이그거에 맞게 변경
    //하이퍼링크 누를때마다 id 가 HTML,CSS,JAVASCRIPT 일때 결과 보여줌
    response.end(template);

});
app.listen(3000);
/*
장점 : template 내용만 바꾸면 id 에 따라 자동으로 나머지 내용이 바뀜
id 가 머든간에 다 적용 가능
*/