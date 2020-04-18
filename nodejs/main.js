var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`,'utf8',function(err,contents){
        /*
        파일경로는 따옴표 아니고 백틱` 써야 댐 안그러면 $이 자체를
        그냥 파일 이름으로 봄. $들어가는건 무족건 `
        
        function 함수에 template 내용도 넣어주어야 (app.listen 전까지)
        파일 읽은 다음에 그걸
        전해줄 수 있음. 안그러면 ${contents}내용을 못찾아서 에러남

        html, css, javascript 파일 내용 편집하고 저장하면 cmd 창에서 node 프로그램 실행안해도
        웹브라우저에서 새로고침만 하면 다시 로딩 됨 -> 원인: 바로바로 해당 파일 꺼내서 읽기 때문이다

        */
       var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ul>
          <h2>${title}</h2>
          <p>
          ${contents}
          <!--readFile 해서 읽어온 내용들 역에 ..--> 
          </p>
        </body>
        </html>
        `;
        response.end(template);
    });
    //id로 입력한 거랑 data 디렉토리의 해당 id 파일 이름이랑 같으니까
    //그 아이디에 해당하는 파일을 readFile 해주면 됨 -> 내용을 contents에 문자열 저장
    //html에 인코딩 문제 안생기도록 utf8 해줌
 
});
app.listen(3000);