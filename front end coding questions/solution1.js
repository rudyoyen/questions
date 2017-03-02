
//These are answer to Coding Questions from here https://github.com/h5bp/Front-end-Developer-Interview-Questions
//Coding Questions:


//Question: What is the value of foo?

var foo = 10 + '20';

//Answer: When you add a string and a number the result will be a string (string coercion).
//So foo = "1020";


//Question: How would you make this work?

function add (firstNum, secondNum) {
	function innerAdd (num) {
		return firstNum + num;
	}

	return secondNum == undefined ? innerAdd : firstNum + secondNum;
}

console.log(add(2, 5)); // 7
console.log(add(2)(5)); // 7


//Question: What value is returned from the following statement?

"i'm a lasagna hog".split("").reverse().join("");

//Answer: "goh angasal a m'i";


//Question: What is the value of window.foo?

( window.foo || ( window.foo = "bar" ) );
console.log(window.foo);

//Answer: if foo exists on the global object, then window.foo will return whatever foo is referencing. 
//If foo is not defined on the global object, window.foo will point to "bar".

//Question: What is the outcome of the two alerts below?

var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar); 	//answer: will execute first because it's an IFFE
})();
alert(foo + bar);		//answer: will execute second, but will fail because bar is not defined

//Answer: The IFFE's contents will execute first and it will correctly create a popup that says "Hello World".
//The second alert will not show a popup because bar is not defined here and there is an error. It will fail silently.
//If these were console.logs rather than alerts, the second console.log would throw an error saying bar is undefined.

//Question: What is the value of foo.length?

var foo = [];
foo.push(1);
foo.push(2);

//Answer: 2

//Question: What is the value of foo.x?

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x);

//Answer: foo.x is undefined. The second line (var bar = foo) has no bearing on this; it's the last line that determines the 
//value of foo.x. The last line should be read from eft two right and could be broken up into two statements to make it 
//easier to understand:
	// foo.x = foo;
	// foo = {n: 2};

//If it was read from right to left, meaning:
	// foo = {n: 2};
	// foo.x = foo;

//Then foo.x would equal a recursive object:
 // {
 // 	n: 2,
 // 	x: {
 // 		n: 2,
 // 		x: {
 // 			...
 // 		}
 // 	}
 // }


//Question: What does the following code print?

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

//Answer: 'one'; 'three'; 'two';
