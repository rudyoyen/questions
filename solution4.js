let times =   [
    {startTime: 2,  endTime: 3},
    {startTime: 4,  endTime: 8},
    {startTime: 5,	endTime: 9},
    {startTime: 10, endTime: 12},
    {startTime: 12, endTime: 13}
];


function mergeRanges(ranges) {
	let sorted = ranges.sort(function (current, next) {
		return current.startTime - next.startTime;
	});
	let mergedIndex = 0;
	let merged = [sorted[0]];
	
	for (let i = 1; i < sorted.length; i++) {
		if (merged[mergedIndex].endTime >= sorted[i].startTime) {
			merged[mergedIndex].endTime = Math.max(merged[mergedIndex].endTime, sorted[i].endTime);
		} else {
			mergedIndex += 1;
			merged[mergedIndex] = sorted[i];
		}
	}

	return merged;
}



let answer = JSON.stringify(mergeRanges(times));
console.log("answer:", answer);

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("answer").innerHTML = answer;	
});

/*** LESSONS LEARNED **** 
-Start with big sample size, think about all potential scenarios
-Does the data need to be sorted in order to work?
	At first I tried the greedy approach, as we learned it is very efficient when it can be used.
	The problem was that when you had no idea what order the data would come in, you had to account
	for a huge number of scenarios. IF our data was sorted beforehand, however, it was very easy to 
	write a solution. 

	When thinking back to the previous three exercises, we did not need to sort them in order to make
	a single loop through them:
	1. The stock prices happened in chronological order, and we used a greedy approach
	2. To get all the products of an array, it didn't matter what order the array was in
	3. To get the highest product of an array, it also didn't matter what order the array was in

-Question for future exercises - How can we tell whether we have to sort our data as the first step
to the solution?

*/

/*

//All the scenarios we need to think of
let times =   [
    {startTime: 2,  endTime: 3},
    {startTime: 4,  endTime: 8},
    {startTime: 5,	endTime: 9},
    {startTime: 10, endTime: 12},
    {startTime: 12, endTime: 13},
    {startTime: 1, 	endTime: 16}
];


let times2 =   [
    {startTime: 3,  endTime: 5},
    {startTime: 7,  endTime: 8},
    {startTime: 1,	endTime: 10}
];

let times3 =   [
    {startTime: 3,  endTime: 5},
    {startTime: 7,  endTime: 8},
    {startTime: 1,	endTime: 6}
];

let times4 =   [
    {startTime: 3,  endTime: 5},
    {startTime: 7,  endTime: 8},
    {startTime: 1,	endTime: 7}
];


function mergeRanges(ranges) {
	let merged = [ranges[0]];

	for (let i = 1; i < ranges.length; i++) {
		let hasModifiedRange = false;
		let currentRange = ranges[i];
		//is the start time of this current range less than the end time of any of the merged ranges?
		for (let j = 0; j < merged.length; j++) {
			let testingMergedRange = merged[j];
			if (currentRange.startTime < testingMergedRange.endTime) {
			//if yes - modify the merged range that has been identified
				hasModifiedRange = true;
				//does the current range have a higher end time?
				if (currentRange.endTime > testingMergedRange.endTime) {
					testingMergedRange.endTime = currentRange.endTime;
				}
				//does the current range have a lower start time?
				if (currentRange.startTime < testingMergedRange.startTime) {
					testingMergedRange.startTime = currentRange.startTime;
				}
				break;
			}
		}
		if (!hasModifiedRange) {
			//if no - insert current range into merged ranges
			merged[merged.length] = currentRange;
		}

		console.log("merged", merged);
	}
	return merged;
}
*/