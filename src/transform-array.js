const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	const transforms = ["--discard-prev", "--discard-next", "--double-prev", "--double-next",];
	if (!Array.isArray(arr))
		throw new Error('\'arr\' parameter must be an instance of the Array!');
	let temp = arr.map(x => [x]);
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case transforms[0]:
				if (typeof temp[i - 1] !== "undefined")
					temp[i - 1].pop();
				break;
			case transforms[1]:
				if (typeof temp[i + 1] !== "undefined")
					temp[i + 1].pop();
				break;
			case transforms[2]:
				if (typeof temp[i - 1] !== "undefined")
					temp[i - 1].push(temp[i - 1][0]);
				break;
			case transforms[3]:
				if (typeof temp[i + 1] !== "undefined")
					temp[i + 1].push(temp[i + 1][0]);
		}
	}
	return temp
		.reduce((a, b) => a
			.concat(b), [])
		.filter(x => typeof x !== "undefined" && !transforms
			.includes(x));
}

module.exports = {
	transform
};
