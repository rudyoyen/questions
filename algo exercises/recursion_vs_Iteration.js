
 function product1ToNR(n) {
    // we assume n >= 1
    console.warn("at top of function with n:", n);
    let product;
    if (n > 1) {
    	let next = n-1;

    	console.log("calling production1NR(" + next + ");");
    	let nextProduct = product1ToNR(next); 	
    	console.warn("exiting recursion from", next, " back to", n);
    	//console.log("next product is", nextProduct);
    	
    	product = n * nextProduct;
    	console.log("calculating " + n + " * " + nextProduct + " => " + product);
    } else {
    	
    	console.log("n is not greater than 1 so product is set to 1");
    	product = 1;
    }

    console.log("returning product", product);
    return product;
    //return (n > 1) ? (n * product1ToNR(n-1)) : 1;
}


 function product1ToN(n) {
    // we assume n >= 1
    console.warn("at top of function with n:", n);
    let result = 1;
    for (let num = 1; num <= n; num++) {
    	console.log("num:", num, "n:", n);
        let product = result * num;
        console.log("calculating ", result, "*", num, "=>", product);
        result = product;
    }

    console.log("returning", result);
    return result;
}



let answer = JSON.stringify(product1ToNR(5));
console.log("answer:", answer);

answer = JSON.stringify(product1ToN(5));
console.log("answer:", answer);

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("answer").innerHTML = answer;	
});
