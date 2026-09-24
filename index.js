const log = require("./calculation");
const addition=require("./calculation");
const sin = require("./calculation");
const sub = require("./calculation");

const result=addition(10,5);
const logResult=log(2)

console.log("Addition:",result);
console.log("Log answer: ",logResult);
console.log("Addition:",result);
console.log(sub(2, 3));
//return sin of a single angle 
console.log("Sin:",sin(0.5236));
