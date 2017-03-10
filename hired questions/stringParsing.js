/*
Create a function that takes in a block of text, like a paragraph, and returns
the length of the longest sentence. Sentence length is measured in number of words. 
The text is divided into sentences by splitting it as dots, question marks and exclamation marks.
A sentence can be divided into words by splitting it at spaces. A sentence without words is valid but
valid word must contain at least one letter.

Example #1: "We test coders. Give us a try?"

The sentences would be:
1st Sentence: "We test coders" (3 words)
2nd Sentence: "Give us a try?" (4 words)
3rd Sentence: "" (0 words)

The function for this example should return 4 (the number of words in the second sentence)

Example #2: "Forget    CVs..Save time . x x"

The sentences would be:
1st Sentence: "Forget     CVs" (2 words)
2nd Sentence: "" (0 words)
3rd Sentence: "Save time " (2 words)
4th Sentence: " x x" (2 words)

The function should return 2 because that is the max number of words in the longest sentence

Assume that the text only includes:
	letters (a-z,A-Z), spaces, periods, question marks, and exclamation marks.
	The entire text will be between 1-100 characters
*/



//This function is not part of the solution, but was my first step and helped
//me wrap my head around how to approach the problem
function getSentences (text) {
	const operators = [".", "?", "!"];
	const sentences = [];
	let currentSentence = [];

	function isOperator (l) {	
		return operators.indexOf(l) >= 0;
	}

	//loop through all letters in text
	for (let i = 0; i < text.length; i++) {
		let currentLetter = text[i];
		//if it is not an operator, add the letter to our current sentence
		if (!isOperator(currentLetter)) {
			currentSentence.push(currentLetter);
		} else {
		//if the letter is an operator, then the current sentence has ended and 
		//is pushed into our array of sentences and a new sentence is started
			sentences.push(currentSentence);
			currentSentence = [];
		}
	}

	return sentences;
}


function getMaxSentence (text) {
	const operators = [".", "?", "!"];
	let currentSentenceLength = 0;
	let currentWord = "";
	let maxSentenceLength = 0;

	function isOperator (l) {	
		return operators.indexOf(l) >= 0;
	}

	//loop through all letters in text
	for (let i = 0; i < text.length; i++) {
		let currentLetter = text[i];

		//if the current letter is a space 
		if (currentLetter === " ") {
			//if current word is not empty then we are at the end of the word
			if (currentWord !== "") {
				currentSentenceLength += 1;	//increment current sentence length
				currentWord = "";	//reset current word to empty
			}
			//else ignore spaces

		//if the current letter is a character
		} else {
			//if current letter is not an operator
			if (!isOperator(currentLetter)) {
				currentWord += currentLetter;	//add letter to current word
			} else {
				//if current letter is an operator, then sentence has ended
				//compare sentence length to the current max sentence length
				maxSentenceLength = Math.max(maxSentenceLength, currentSentenceLength);
				currentSentenceLength = 0;	//reset current sentence
			}
		}
	}

	return maxSentenceLength;
}

const words = "Forget    CVs..Save time . x x";

console.log(getMaxSentence(words));