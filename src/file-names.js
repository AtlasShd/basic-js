const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let files = new Set();
	let count = {};

	return names.map(a => {
		if (!files.has(a)) {
			files.add(a);
			count[a] = 1;
			return a;
		}
		if (!count.hasOwnProperty(a))
			count[a] = 1;
		let search = `${a}(${count[a]})`;
		files.add(search);
		count[a] += 1;
		return search;
	});
}

module.exports = {
	renameFiles
};
