const user = {
  username: "SUjal",
  price: 999,
  welcomeMessage: function () {
    // to access objects within this scope/Current context we use this keyword
    console.log(`${this.username}, Welcome to the website`);
  },
};
// user.welcomeMessage()

// When we check {this} variable in browser window it will give us all the window events which will be used in DOM manipulation

// We cannot access this inside arrow funtion but we can access only this variable inside the
// const chai = () => {
//   let username = "Sujal";
// };

// Syntax one for writing arrow functions #Explicit arrow function
// const addNum = (num1, num2) => {
//   return num1 + num2
// }

// Syntax Two for writing arrow functions #Implicit arrow function
const addNum = (num1, num2) => num1 + num2;

// console.log(addNum(5, 3));
// Quick Tip: WHEN WE WRITE OBJECT IN AN ARROW FUNCTION WE KEEP IT INSIDE PARENTHESIS
