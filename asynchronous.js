//synchronous code: executed line by line
// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }
// const ans1=sum(100);
// console.log(ans1);
// const ans2=sum(1000);
// console.log(ans2)
// const ans3=sum(10000);
// console.log(ans3);
// //reading a feil
// const fs=require("fs");
// const contents=fs.readFileSync("a.txt","utf-8");//bytes,hex
// console.log(contents);
// const fs=require("fs");
// const data=fs.readFileSync("b.txt","utf-8");
// console.log(data);
const fs=require("fs");

const contents=fs.readFile("a.txt","utf-8");//async
console.log(contents);

const contents2=fs.readFileSync("b.txt","utf-8");//synch
console.log(contents2);