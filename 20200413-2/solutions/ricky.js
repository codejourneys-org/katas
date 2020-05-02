/**
 * Given an array arr and a number N, create a new array
 * that contains each number of the array
 * at most N times without reordering.
 */

function deleteNth(arr, n) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		let maxIndex = 0;
		let count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				count++;
			}
			if (count == n) {
				maxIndex = j;
				break;
			}
		}
		if (i <= maxIndex) {
			result.push(arr[i]);
		}
	}
	return result;
}

console.log(deleteNth([1, 1, 1, 1], 2)); // [1,1]
console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
