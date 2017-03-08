//push adds one or more elements to the end of an array
const array = ["a", "b"];

let length = array.push("c", "d");

console.log(length);	//push returns the length of the new array
console.log(array);		//push modifies the array

//You can also use push to join to arrays using the apply function

const firstSet = [1, 2];
const secondSet = [3, 4];

let newLength = Array.prototype.push.apply(firstSet,secondSet); //apply takes an array 

console.log(newLength);	//4
console.log(firstSet);	//[1, 2, 3, 4]
console.log(secondSet);	//[3, 4]

//You can also duplicate an array using push

let duplicateLength = Array.prototype.push.apply(secondSet,secondSet); //apply takes an array 

console.log(duplicateLength);	//4
console.log(secondSet);	//[3, 4, 3, 4]