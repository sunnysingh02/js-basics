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

  function random(resolve){//resolve is also a function
setTimeout(resolve,3000);
  }
  
  let p=new Promise(random)//supposed to return u somthing eventually

//using the eventual  value returned by the promise
  function callback(){
  console.log("promise succeded")
}
p.then(callback);
  