const addition=require("./calculation");
const sin = require("./calculation");

const result=addition(10,5);


console.log("Addition:",result);
const sub = require("./calculation");
console.log(sub(2, 3));
//return sin of a single angle 
console.log("Sin:",sin(0.5236));
