
const prices = [10, 70, 80, 5, 8, 200, 3, 9];
const badPrices = [-10, -12, -18, -38];

function getMaxProfit(prices) {
	//assume length of prices is at least 2
	let maxProfit = prices[1] - prices[0];
	//let buyPrice = prices[0];
	let minPrice = prices[0];

	for (let i = 1; i < prices.length; i++) {
		let prev = i - 1;
		console.log("analyzing price ", prices[i]);

		if (prices[prev] < minPrice) {
			minPrice = prices[prev];
			console.log("setting minPrice to ", minPrice);
		}

		if (prices[i] - minPrice > maxProfit) {
			maxProfit = prices[i] - minPrice;
			console.log("setting maxProfit to ", maxProfit);
		}
	}

	return maxProfit;
}

let answer = getMaxProfit(badPrices);

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("answer").innerHTML = answer;	
});
