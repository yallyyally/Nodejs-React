var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
  
    console.log(url.parse(_url, true)); 
    /* 파싱된거 찍어보기
     [   hostname: null,
    hash: null,
    search: null,
    query: [Object: null prototype] {},
    pathname: '/', 쿼리스트링 제외 경로
    path: '/?id=CSS' 쿼리 스트링 포함
    href: '/favicon.ico'
  }]
  */
    
    var queryData = url.parse(_url, true).query; 
    //{id: 'HTML'}
    var pathname = url.parse(_url,true).pathname;
    // '/'
    var title = queryData.id;
    //id 타이틀에 저장
    var desc = 'Hello,Node js.';
    //디폴트 설명

    if(pathname==='/')
    { //홈과 각각의 페이지 둘다 / -> 중첩으로 구분해주어야 할 필요 있음
      fs.readFile(`data/${title}`,'utf8',function(err,desc)
      {
      if (title===undefined)
      { //쿼리 스트링이 없을 때
        title = 'welcome';
         desc = 'Hello, Node.js';
      }

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
             ${desc}
             <!--readFile 해서 읽어온 내용들 역에 ..--> 
             </p>
           </body>
           </html>
           `;

           response.writeHead(200);
           response.end(template);
       });
    }
  else
  {

    //200의 뜻 - 파일이있는지 어딘지 브랑우저랑 서버랑 통신. 
    //200은 성공.
    response.writeHead(404);
    //404는 파일 찾을 수 없을 때
    response.end('Not found');
  }
    //id로 입력한 거랑 data 디렉토리의 해당 id 파일 이름이랑 같으니까
    //그 아이디에 해당하는 파일을 readFile 해주면 됨 -> 내용을 contents에 문자열 저장
    //html에 인코딩 문제 안생기도록 utf8 해줌
 
});
app.listen(3000);