const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let ones = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] == -1) {
			ones.push(i);
			arr.splice(i, 1);
		}
	}
	arr.sort((a, b) => a - b);
	ones.sort((a, b) => a - b);
	for (let i of ones) {
		arr.splice(i, 0, -1);
	}
	return arr;
}

module.exports = {
	sortByHeight
};
