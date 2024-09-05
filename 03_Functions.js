// Functions

function sayMyName() {
  // Function Scope written here
  console.log("Sujal");
  console.log("Jaiswal");
}

// When we call only the name (sayMyName) we are only refering the funtion but when we call with parenthesis [sayMyName()] the function is ready to be executed
// sayMyName();

// When we write variables in functions it is said to be parameters but when we pass the values while calling the function it is said to be argument

function addTwoNumbers(num1, num2) {
  // console.log(num1 + num2)
  // We are not returning the value here we are simply making a clg print, To return the value we need to write the keyword return
  return num1 + num2;
}

const result = addTwoNumbers(2.5, 2.5);
// console.log("Result:", result);

// Here we are assigning a default value as user so that the parameter never stays empty
function loginMessage(username = "User") {
  return `${username} Just logged in`;
}
// console.log(loginMessage("thesujaljaiswal"));

// To add multiple values inside a single funtion we use rest operator
function addToCart(...values) {
  return values;
}
// console.log(addToCart(200, 333, 425, 535));

// handling objects as a parameter in function
const loginDetails = {
  username: "Sujal",
  password: "admin123",
};

function getLoginDetails(object) {
  return `Successfully logged in ${object.username} using passsword ${object.password}`;
}
// console.log(getLoginDetails(loginDetails));

// Handling arrays inside functions
const names = ["SUJAL", "YASH", "AARAV", "HARSH"];
function getDesiredIndexValue(array, index){
    return array[index]
}
// console.log(getDesiredIndexValue(names, 2))

