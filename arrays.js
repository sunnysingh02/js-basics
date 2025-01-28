//creating a array
let studentName=["sunny","singh","rajput"];
console.log(studentName);
//adding different types of data type in a arrays
let mixedArray=["sunny",45,[1,2,3],{schoolName:"xyz"}]; //if you use ( ) in array then is doesn't print same
//console.log(mixedArray);

//iterating over array
for(let name of mixedArray){
    //console.log(name);
}
//for-in loop
for (let index in studentName) {
    //console.log(studentName[index]);
}
studentName.push("hp");
console.log(studentName);
//modifying arrays
//adding
studentName.push("chhotu");
console.log(studentName);
//removing
//using pop
studentName.pop();
console.log(studentName)
//using shift it remove the very first element
studentName.shift();
console.log(studentName);
//using splice it will emoves one element at index 1
studentName.splice(1,1);
console.log(studentName);
//map , filter