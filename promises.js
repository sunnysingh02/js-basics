// function logName(){
//     console.log("sunny singh");
// }
// setTimeout(logName,3000);
// //callback based approach
// //promises based approach
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
//   //returns an object of the promise class
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)

//   function random(resolve){//resolve is also a function
// setTimeout(resolve,3000);
//   }
  
//   let p=new Promise(random)//supposed to return u somthing eventually

// //using the eventual  value returned by the promise
//   function callback(){
//   console.log("promise succeded")
// }
// p.then(callback);
  
//  function setTimeoutPromisified(duration){
//    return new Promise(function (resolve){
//      setTimeout(resolve,duration)
//    })
//  }
// function callback(){
//   console.log("hey");
// }
// setTimeoutPromisified(2000).then(callback);


//log hi after 1 second callback hell
// setTimeout(function(){
//   console.log("hi");
//   setTimeout(function(){
//     console.log("hello");
//     setTimeout(function(){
//       console.log("hello there");
// },5000);
// },3000);
// },1000);
//doesnt really have callback hell
// function callback(){
//   console.log("hi");
// }
// function callback2(){
//   console.log("hello");

// }
// setTimeout(callback2,3000);

// setTimeout(callback, 1000);
//promise chaining
// setTimeoutPromisified(1000).then(function(){
//   console.log("hi");
//   return setTimeoutPromisified(3000)
// }).then(function(){
//   console.log("hello");
//   return setTimeoutPromisified(5000);
// }).then(function(){
//   console.log("hi there");
// });
// console.log("outside");

//await/async
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
}

solve();
console.log("after solve fun");