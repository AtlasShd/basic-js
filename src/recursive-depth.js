const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		let count = 1;
		let count2 = 1;
		arr.forEach(a => {
			if (Array.isArray(a)) {
				count2 = this.calculateDepth(a) + 1;
				if (count2 > count) count = count2;
			}
		});
		return count;
	}
}

module.exports = {
	DepthCalculator
};
