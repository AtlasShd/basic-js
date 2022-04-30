const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const stringNum = String(n);
	const nums = [];

	for (let i = 0; i < stringNum.length; i++)
		nums.push(Number(stringNum.substring(0, i) + stringNum.substring(i + 1)));
	return Math.max(...nums);
}

module.exports = {
	deleteDigit
};
