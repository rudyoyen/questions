
/*** MY FIRST SOLUTION ***/
function getNumberOfWaysToMakeChange (amount, denominations) {
	let comboCount = 0;
	let notExactComboCount = 0;
		
	function makeCombo (currentAmount, denoms) {
		// recursionCount += 1;
		// denomsObj[recursionCount] = denoms;
		// currAmtObj[recursionCount] = currentAmount;
		// console.log("denomsObj", denomsObj, "currAmtObj", currAmtObj);
		console.log("checking ways to make", currentAmount, "with", denoms);
		for (let i = denoms.length - 1; i >= 0; i--) {
		
			let remainder = currentAmount - denoms[i];

			if (remainder > 0) {
				let newDenoms = denoms.slice(0, i + 1);
				makeCombo(remainder, newDenoms);
			} else if (remainder === 0) {
				console.log("we have exact change. denoms:", denoms);
				comboCount += 1;
			} else if (remainder < 0 && denoms.length === 1) {
				console.log("we're out of denominations to make exact change");
				notExactComboCount += 1;
			}
		}

	}

	makeCombo(amount, denominations);
	console.log("comboCountt", comboCount, "notExactComboCount", notExactComboCount);
	return comboCount;
}
/*** END OF FIRST SOLUTION ****/

function changePossibilitiesTopDown(amountLeft, denominations, currentIndex) {
    currentIndex = currentIndex || 0;

    // base cases:
    // we hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // we overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;

    // we're out of denominations
    if (currentIndex === denominations.length) return 0;

    console.log('checking ways to make ' + amountLeft + ' with ' + denominations.slice(currentIndex));

    // choose a current coin
    var currentCoin = denominations[currentIndex];

    // see how many possibilities we can get
    // for each number of times to use currentCoin
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        numPossibilities += changePossibilitiesTopDown(amountLeft,
            denominations, currentIndex + 1);
        amountLeft -= currentCoin;
    }

    return numPossibilities;
}

function changePossibilitiesBottomUp(amount, denominations) {

    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;


    for (var j = 0; j < denominations.length; j++) {
        var coin = denominations[j];
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}

let amount = 10;
let denominations = [1, 2, 3];

let answer = JSON.stringify(changePossibilitiesBottomUp(amount, denominations));
console.log("answer:", answer);

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("answer").innerHTML = answer;	
});

/*
Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.

Write a function that, given:

an amount of money
a list of coin denominations
computes the number of ways to make amount of money with coins of the available denominations.

Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢



	function makeCombo (currentAmount, remainingDenoms, combo) {
		for (let i = remainingDenoms.length - 1; i >= 0; i--) {
			let currentDenom = remainingDenoms[i];	//3
			remainingDenoms.length -= 1;	//[1, 2]

			//5 >= 3
			if (currentAmount >= currentDenom) {
				//if the denomination can fit inside the amount, see how many times and see what the remainder is
				let quotient = Math.floor(currentAmount / currentDenom);	//(5 / 3) --> 1
				combo[currentDenom] = quotient; 	//{3: 1}
				currentAmount = currentAmount % currentDenom;	//2

				//whenever you have a solution, store it in the changeCombos and will likely break one of these loops
				if (currentAmount == 0) {
					return combo;
				}
			}
			//loop through remaining denominations with remainder
		}
	}

	//******FUNCTION WITH BUG WHERE DENOMS IS CHANGED AT HIGHER LEVELS OF RECURSION*****
	let recursionCount = 0;
	let denomsObj = {};
	let currAmtObj = {};
						//5				[1, 2, 3]
	function makeCombo (currentAmount, denoms) {
		let insideObj = {};
		recursionCount += 1;
		denomsObj[recursionCount] = denoms;
		currAmtObj[recursionCount] = currentAmount;
		console.log("denomsObj", denomsObj, "currAmtObj", currAmtObj);

		for (let i = denoms.length - 1; i >= 0; i--) {
				//2 		5			- 	3
			let remainder = currentAmount - denoms[i];


				//2 > 0
			if (remainder > 0) {
				if (denoms[denoms.length - 1] > remainder) {
					denoms.length -= 1;	//[1, 2]					
				}
				//denoms.length = i;


				makeCombo(remainder, denoms); //(5, [1,2])
			} else if (remainder === 0) {
				console.log("we have exact change. denoms:", denoms);
				comboCount += 1;
			} else if (remainder < 0 && denoms.length === 1) {
				console.log("we're out of denominations to make exact change");
				notExactComboCount += 1;
			}

		}

	}


*/