//program? 시간의 순서에 따라 일어나야 할 일
//프로그래머는 그 일들이 순서에 따라 일어나게 해야 함
console.log('A');
console.log('B');
//원래 콘솔 창에 하나 하나 쳐야 하는데 이걸 파일 하나에 넣어서 한번에 가능하게 함
//만약 1억줄의 코드로 구성된 두개의 프로그램이 한줄만 빼고 다 갈아엎어야되면, 그걸 어떻게 하나하나 
//엎어?
/**정답은 제어문**/

if(true)
{
    console.log('C1');
    //이것만 시행 됨
}
else //if(false)
{
console.log('C2');
}
console.log('D');

//parameter: 입력되는 정보의 형식, argument: 실제로 형식에 맞게 입력한 값
//url paramter -> HTML output

var args = process.argv;
console.log(args);
/*
node syntax/program.js joon hey
args의 내용 - 배열 (문장)
[
  'C:\\Program Files\\nodejs\\node.exe', -> node js runtime 위치
  'C:\\Users\\GL62\\Desktop\\nodevue\\syntax\\program.js', ->실행시킨 파일 정보
  'joon' ->우리가 입력한 입력값
  'hey'
]
*/
//console.log(args[2]); -> joon 일케 출력

//우리가 만들고자 하는 것: 입력 값에 따라 다른 문장 시행.
if(args[2]==='1')
    { //node syntax.program.js 1
        console.log('CCC');
    }
else
    {//node syntax.program.js 2
        console.log('DDD');
    }