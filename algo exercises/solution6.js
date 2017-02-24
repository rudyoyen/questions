

function getXAxisMinMax (box) {
	return {
		min: box.leftX,
		max: box.leftX + box.width
	};
}

function getYAxisMinMax (box) {
	return {
		min: box.bottomY,
		max: box.bottomY + box.height
	}
}

function getOverlap (boxA, boxB, axis) {
	const a = axis === "xAxis" ? getXAxisMinMax(boxA) : getYAxisMinMax(boxA);
	const b = axis === "xAxis" ? getXAxisMinMax(boxB) : getYAxisMinMax(boxB);

	if (a.min <= b.max && b.min <= a.max) {
		let max = Math.min(a.max, b.max);
		let min = Math.max(a.min, b.min);
		return max - min;
	} else {
		return "no overlap";
	}
}

function getOverlapBox (boxA, boxB) {
	const overlapWidth = getOverlap(boxA, boxB, "xAxis");
	const overlapHeight = getOverlap(boxA, boxB, "yAxis");

	if (overlapWidth === "no overlap" || overlapHeight === "no overlap") {
		return "no overlap";
	}

	return {
		leftX: Math.max(boxA.leftX, boxB.leftX),
		bottomY: Math.max(boxA.bottomY, boxB.bottomY),
		width: overlapWidth,
		height: overlapHeight
	};
}

const boxA = {
	leftX: 1, 
	bottomY: 1,
	width: 3,
	height: 2
}

const boxB = {
	leftX: 1,
	bottomY: 3,
	width: 3,
	height: 2
}



const a = {
	min: 2,
	max: 9
};

const b = {
	min: 0,
	max: 10
};

let answer = JSON.stringify(getOverlapBox(boxA, boxB));
console.log("answer:", answer);

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("answer").innerHTML = answer;	
});