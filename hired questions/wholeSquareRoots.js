//I don't remember this question that clearly, but here's what I recall:

/*
Write a function that given two numbers returns all the numbers between those two
numbers that are perfect squares, inclusive of the ends. IE think of the two 
numbers as a range with inclusive ends, find all the perfect squares in the range.

Example: getPerfectSquares(4,17) //[4, 9, 16]

*/


function getPerfectSquares (a, b) {
	const perfectSquares = [];

	for (; a <= b; a++) {
		//if the square root of the current number is a whole number
		if (Math.sqrt(a) % 1 === 0) {
			perfectSquares.push(a);	//push the number into the perfect squares array
		}
	}

	return perfectSquares;
}

console.log(getPerfectSquares(4,17));
