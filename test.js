// to run this file write node test.js (Writing this for my ease of running this file)
// 01_basics
console.log("Sujal");

// 01_variables
const accountId = 144243;
let accountEmail = "sujal@gmail.com";
var accountPassword = "123456";
/*
Prefer Not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword]);

// 02_datatypes
// ("use strict"); this is used to tell that we a re using new JS Just like this learning journey

// alert(3+3) // We write this in browser version and not in nodeJS version

// always write code that is readable

let name = "SUjal";
let age = 20;
let isLoggedIn = true;

// number => 2 to power 53
// bigInt
// string => ""
// boolean => true/false
// null is a standalone value
// undefined is when value is not defined
// symbol => unique

// Object

console.log(typeof null)//when we check type of null it shows up as object