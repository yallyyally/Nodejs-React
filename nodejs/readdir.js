//기존 main의 문제점: data가 추가되면 글목록 직접 편집해야함..li부분
//->파일이 추가되었을때 nodejs 가 어떻게 그걸 알아차리느냐 그말이야

/*
fs.readdir(testFolder, (err, files) =>{
    files.forEach(file =>{
        console.log(file);
    });
    testFolder 디렉토리의 files배열은 각 file 이름으로 되어있다~
    testFolder의 파일목록을 files 배열에 저장한다.
}
)
*/ 

var testFolder = './data/'; //'data' - 현재 디렉토리 (nodejs) 에 있는 data
var fs = require('fs');

fs.readdir(testFolder,function(error, filelist){
    console.log(filelist);
    //['CSS',HTML','Javascript']
})