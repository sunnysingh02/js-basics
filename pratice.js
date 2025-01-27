//variables
var name="sunny";//sunny is string here
console.log(name);
const age=19;
console.log(age);
let rollnumber=149;
console.log(rollnumber)
let student=true;
console.log(typeof student);
//creating objects
const person={
    name:"sunny singh",
    age:19,
    education:"btech"
};
console.log(typeof person)
console.log(person)
//array
const number=[1,2,3,4,5,6,7,8];
console.log(number)
//In JavaScript, when you print an array using console.log(), the output format can vary depending on the environment (e.g., browser console, Node.js, etc.).
console.log(JSON.stringify(number));// to print the whole array in one line 

//string concatenation: joining two or more string together using + operator
let name="sunny singh";
let age=19;
let message="hello"+" "+name+" "+"your age is"+" "+age+" "+ "thank you for having us";
console.log(message)
//another way is using template literals where + is replaced by $and {} without using "" 

//function
//add two number

function sum(a,b){
    return a+b;
}
let answer=sum(27,67);
console.log(answer)
//greeting
function welcomMeg(name){
    console.log("hello"+" "+name+" "+"sir"+" "+"welcome to india")
}
var nameval="sunny singh";
welcomMeg(nameval);
//function declearing using parameters
function print(name){
    console.log(name);
}
print("sunny singh");

//anonymous function
let anonymousFunction=function(){
    console.log("hello from sunny singh")
};
anonymousFunction();
//function expression: adding value to the variable function
let greet=function(){
    console.log("rajput");
};
greet();
// anonymous function are commly used as callback function
setTimeout(function(){   //settimeout will print after give time interval
    console.log("this is a callback function");
},1500);
//iife: immediately invoked function expressions
(function(){
    console.log("iife executed here");
}) ();


//arrow function 
let calculation=(x,y)=>{
    return x+y;
};
console.log(calculation(12,4));

// lexical this 
function person(){
    this.age=0;
    setTimeout(()=>{
        this.age++;
        console.log(this.age);
        
    },10000);
}
let p=new person();

// Write a function that takes a user as an input and greets them with their name and age
let greet=function(){
  let user={
    name:"sunny singh",
    age:19
  };
  console.log("hello"+" "+user.name+" "+"your age is"+" "+user.age);
}
greet();
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
let greet=function(){
    var user={
        name:"sunny singh",
        age:19,
        gender:"male"
    };
    if(user.gender=="male") console.log("hii mr"+" "+user.name+" "+"your age is just "+" "+user.age);
}
greet();

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
let evenvalue=function(){
    let array=[1,2,3,4,5,6,7,8,9,0,34,65,74];
    let even=array.filter(array=>array%2===0);
    console.log(JSON.stringify(even));
}
evenvalue();

//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
let greet=function(){
    let user=[{
        name:"sunny singh",
        age:19
    },{
        name:"prity singh",
        age:22
    },{
        name:"chhotu singh",
        age:4
    }]
    user.forEach(user => {
    if(user.age>18) console.log(user.name);
    else console.log("wait bhai");
    });

};
greet();
