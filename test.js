// to run this file write node test.js (Writing this for my ease of running this file)

// 01_basics
// console.log("Sujal");

// 01_variables
const accountId = 144243;
let accountEmail = "sujal@gmail.com";
var accountPassword = "123456";
/*
Prefer Not to use var
because of issue in block scope and functional scope
*/
// console.table([accountId, accountEmail, accountPassword]);

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

// console.log(typeof null); //when we check type of null it shows up as object

let score = "33a";
// console.log(typeof score);

const valueConverted = Number(score);
// console.log(typeof valueConverted);

let x = 3;
const y = x++;
// when used ++ after then it will first store the value of x inside y and then increase the value of x
// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
// when used ++ after then it will first increase the value of x inside y and then store the value of x
// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// Comparision(<, >) and equality(==) check are two different thing

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (used in Primitive datatypes), Heap(used in non-primitive datatypes)

// when we change value in stack the actual valure is not tampered, but whereas in heap the actual value is changed/tampered

// when we use `backticks` in strings it is said to bhi string interposition