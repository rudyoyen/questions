//shift removes the element at the zeroeth index and shifts the 
//values of the remaining elements down
//how to remember what shift does - it SHIFTS the elements' indices down by one

const array = ["a", "b", "c"];

let firstElment = array.shift();

console.log(firstElment); //shift returns the element at the zeroeth index
console.log(array);	//shift modifies the original array