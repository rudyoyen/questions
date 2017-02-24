//Answers to 'Algorithm Beginner Level' questions from here: https://github.com/khan4019/front-end-Interview-Questions

// Algorithm Beginner Level


// Verify a prime number?

	function isPrime (num) {
		if (num <= 2) {
			return true;
		} 
		if (num % 2 === 0) {
			return false;
		} 
		for (let i = 3; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
	//console.log(isPrime(11));

// BD Question - Find all factors of a number?

	function getAllFactors (num) {
		const factors = [];
		const sqrtOfNum = Math.sqrt(num);
		let divisor;

		//check for all factors other than squar root
		for (divisor = 1; divisor < sqrtOfNum; divisor++) {
			if (num % divisor == 0) {	//if the divisor is a factor
				factors.push(divisor); 	//add the divisor
				factors.push(num / divisor);	//add the divisor's complimentary factor
			}
		}
		//check if square root itself is a factor (ie a whole number)
		if (sqrtOfNum === divisor) {
			factors.push(divisor)
		}
		return factors;
	}
	//console.log(getAllFactors(16));


// Find all prime factors of a number?

	//relies on isPrime above
	function getAllPrimeFactors (num) {
		const primes = [];

		for (let i = 3; i <= num; i += 1) {
			if (num % i == 0) {
				if (isPrime(i)) {
					primes.push(i);
				}
			}
		}
		return primes;
	}
	//console.log(getAllPrimeFactors(69));

	//solution from website
	function getAllPrimeFactorsV2 (n) {
	  var factors = [], 
	  divisor = 2;
	  
	  while(n>2){
	  	console.log("checking if", n, "is divisable by", divisor);
	    if(n % divisor == 0){
	       console.log(divisor, "is a factor");
	       factors.push(divisor); 
	       n= n/ divisor;
	       console.log("resetting n to be", n);
	    }
	    else{
	      divisor++;
	    }     
	  }
	  return factors;
	}
	//console.log(getAllPrimeFactorsV2(45));



// Get nth Fibonacci number?

	//BD iterative approach
	function getNthFibonacciNum(n) {
		let lastNum = 1,
			secondtoLastNum = 0,
			sum = 1;

		if (n === 0) {
			return 0;
		}	
		//index	0 1 2 3 4 5 6
		//value	0 1 1 2 3 5 8
		for (let i = 2; i < n; i++) {
			secondtoLastNum = lastNum;
			lastNum = sum;
			sum = lastNum + secondtoLastNum;
		}
		return sum;
	} 
	//console.log(getNthFibonacciNum(6)); //8

	//BD recursive approach
	function getFibofN(n) {
		if (n > 1) {
			return getFibofN(n-1) + getFibofN(n-2);
		} else {
			return n;
		}
	}
	//console.log(getFibofN(12));

// Find the greatest common divisor of two numbers?


// Remove duplicate members from an array?
// merge two sorted array?
// Swap two numbers without using a temp variable?
// Reverse a string in JavaScript?
// How would you reverse words in a sentence?
// Reverse words in place?
// Find the first non repeating char in a string?
// Remove duplicate characters from a sting?
// How will you verify a word as palindrome?
// Generate random between 5 to 7 by using defined function.
// Find missing number from unsorted array of integers.
// Get two numbers that equal to a given number?
// Find the largest sum of any two elements?
// Total number of zeros from 1 upto n?
// Check whether a given string is a substring of bigger string
// Get permutations of a string