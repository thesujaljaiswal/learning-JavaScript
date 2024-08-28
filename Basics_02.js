// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Arrays

const myarray = [0, 1, 2, 3, 4, 5];
const myarray2 = ["name1", "name2", "name3"];
// console.log(myarray2[0]);
// console.log(myarray.length);

// Methods

// .push -> pushes the element at the end of the array
// myarray.push(6)
// myarray.push(7)

// .pop -> removes the last element from the array
// myarray.pop()

// adds the element at the zeroth index shifting the whole array
// myarray.unshift(9)

// Removes the zeroth element again shifting the whole array
// myarray.shift()

// there are some questionare methods which can be used in finding elements

// join changes the array into a string
// const newarr = myarray.join()

// console.log(myarray)
// console.log(newarr)

// Slice, Splice

// console.log("A", myarray);

// Slice includes starting index and excludes ending index, but does not manipulate the actual array
const newarr1 = myarray.slice(2, 5);
// console.log("B", newarr1);

// Splice includes both starting and ending elements, But it removes the segment from the original array and manipulates the original array
// const newarr2 = myarray.splice(2, 3);
// console.log("Original array", myarray);
// console.log("C", newarr2);

const marvel_heros = ["Thor", "Ironman", "doctor strange", "Spiderman"];
const dc_heros = ["Superman", "Flash", "batman"];

// If we push an array inside an array it will not merge instead it will add the whole array as an element just as the output shown bellow
// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // Output: ['Thor','Ironman','doctor strange','Spiderman',[ 'Superman', 'Flash', 'batman' ]]

// Now to access the value of dc_heros we need to define two indexes
// console.log(marvel_heros[3][2]) //Output: batman

// To merge them properly we use concat
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// But the most ideal and professional method is spread operator (...) we can add multiple arrays at once
const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros)

const another_array = [2, 4, [6, 8], 3, [4, 9, [1, 4, 6], 6]];
// Flat method spreads out nested array and gives a single and simple array
const resolved_array = another_array.flat(Infinity);
// console.log(resolved_array);

// console.log(Array.isArray("Sujal")); //checks whether the element is a array or not
// console.log(Array.from("Sujal")); //converts teh given string into array
// console.log(Array.from({name:"Sujal"})) //Intresting

const score1 = 100;
const score2 = 200;
const score3 = 300;
// console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Objects
const mysym = Symbol("Key1");
// Singleton object
// Object.create -> makes singleton object

// Object literals
const JSUser = {
  name: "Sujal",
  [mysym]: "mykey1",
  age: 20,
  location: "Mumbai",
};
// There are two ways through which we can access values inside objects
// method one
// console.log(JSUser.name);
// console.log(JSUser["age"]);
// console.log(JSUser[mysym]);

// we can change the values directly by using (=)
// JSUser.location = pune

// To freeze a object we write Object.freeze(JSUser)

JSUser.greeting = function () {
  console.log("Hello JS user");
};

JSUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

// console.log(JSUser.greeting());
// console.log(JSUser.greetingTwo());

// To declare a singleton object, we write
// const ObjectName = new Object()

const tinderUser = {};

tinderUser.id = "123";
tinderUser.name = "Sam";

// console.log(tinderUser);

// We can declare nested object values inside our object
const regularUser = {
  email: "some@gmail.com",
  fullName: {
    UserFullName: {
      firstName: "Sujal",
      lastname: "Jaiswal",
    },
  },
};

// console.log(regularUser.fullName.UserFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// To combine arrays we use this syntax were we first assign a empty target object inside which we add all the source object
// const obj3 = Object.assign({}, obj1, obj2);

// Most of the time we will be using spread operator to combine arrays or objects
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// Sometimes it might happen that we get data inside an array in multiple objects
const usersData = [
  {
    id: 1,
    email: "abc@gmail.com",
  },
  {
    id: 2,
    email: "def@gmail.com",
  },
  {
    id: 3,
    email: "ghi@gmail.com",
  },
];

// In this case we access the data like this
// console.log(usersData[1].email)

// these methods return the key/value inside a array
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course = {
  courseName:"JS in Hindi",
  price:"999",
  courseInstructor:"Random Name"
}
// We are destructuring the property of the object and extracting values as direct variables
const {courseName} = course
console.log(courseName)