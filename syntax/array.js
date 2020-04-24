//Create, Read, Update, Delete! CRUD

var arr = ['a',true,1,'3']; //Create
console.log(arr[0]); //Read -> a
arr[0] = 'b';//Update
console.log(arr); // ['b',true,1,'3']

console.log(arr.length); //4 (길이 출력)

arr.push('push'); // 끝에 하나 추가
console.log(arr);

arr.pop();// 끝에 하나 삭제 
arr.pop();
console.log(arr);
