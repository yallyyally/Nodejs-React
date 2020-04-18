var fs = require('fs');
//파일 시스템 모듈 사용 ㄱㄴ
fs.readFile('sample.txt','utf8',function(err,data){
  console.log(data);
  //같은 디렉토리 내의 sample.txt 파일을 읽어서 그 내용을 data에저장한다.
  //utf8 없으면 34 25 25 문자로 안나오고 이래 나옴
});
