/**
 * Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42.
 * These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
 * The sum of the squared divisors is 2500 which is 50 * 50, a square!
 * Given two integers m, n (1 <= m <= n) we want to find all integers
 * between m and n whose sum of squared divisors is itself a square.
 * 42 is such a number.
 */

function listOfSquaredDivisors(m, n = m) {
	let result = [];
	for (let i = m; i <= n; i++) {
		let sum = 0;
		for (let j = 0; j <= i; j++) {
			if (i % j === 0) {
				sum += j * j;
			}
		}
		if (Math.sqrt(sum) % 1 === 0) {
			result.push(i);
		}
	}
	return result;
}

console.log(listOfSquaredDivisors(1, 1000)); // [ 1, 42, 246, 287, 728 ]
console.log(listOfSquaredDivisors(1, 49)); // [ 1, 42 ]
console.log(listOfSquaredDivisors(1)); // [ 1, 42 ]
