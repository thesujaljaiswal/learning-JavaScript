// Immediately Invoked Function Expression (IIFE)

// In IIFE we write the function inside a function and then execute the function immediately as the name suggests
(function chai() {
  // named iife
//   console.log("DB CONNECTED");
})();

// an iife should end with semicolon or it will throw error, to write two iife we seperate them by semicolon

((name) => {
  // simple iife
//   console.log(`DB CONNECTED TWO ${name}`);
})("Sujal");
