const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	if (!options)
		return str;

	let temp = str;
	let rep = (temp, a, b) => Array(a).fill(temp).join(b);

	if ('addition' in options)
		temp += rep(options.addition + '', options.additionRepeatTimes, options.additionSeparator || '|');

	return rep(temp, options.repeatTimes, options.separator || '+');
}

module.exports = {
	repeater
};
