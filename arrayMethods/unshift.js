//unshift adds one or more elements to the beginning of the array

const array = ["c", "d"];

let length = array.unshift("a", "b");

console.log(length); //unshift returns the new length
console.log(array);	//unshift modifies the array


//You can also use unshift to join to arrays using the apply function

const firstSet = [1, 2];
const secondSet = [3, 4];

let newLength = Array.prototype.unshift.apply(secondSet,firstSet); //apply takes an array 

console.log(newLength);	//4
console.log(firstSet);	//[1, 2]
console.log(secondSet);	//[1, 2, 3, 4]