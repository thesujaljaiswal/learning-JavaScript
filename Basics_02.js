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
