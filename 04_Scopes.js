// This variables are declared at the global scope and will be used at the global as well as the block scope
let a = 10;

if (true) {
  // This a Declared is inside block scope and will be used inside block only
  let a = 500;
  //   console.log("Inner: ", a);
}

// console.log(a);

function one() {
  const username = "Sujal";
  function two() {
    const website = "youtube";
    // console.log(username);
  }
  //   console.log(website)

  two();
}
// one()

// ++++++++++++++++++ intresting +++++++++++++++++++++++++++

// console.log(addone(5));
// When we call this function early it gets executed
function addone(num) {
  return num + 1;
}

// console.log(addTwo(2));
// But when we call this function earlier it gives error, as the variable is not declared. This concept is known as Hoisting
const addTwo = function (num) {
  return num + 2;
};
