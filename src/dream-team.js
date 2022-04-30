const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
	let myValues = Array.from(arguments).flat().filter(n => typeof n === 'string').map(n => n.toUpperCase());
	let res = [];
	for (let i = 0; i < myValues.length; i++) {
		if (myValues[i].includes(' ')) {
			res.push(myValues[i].split(' ').join('').charAt(0));
		} else res.push(myValues[i].charAt(0));
	}
	return res.sort().join('');
}
module.exports = {
	createDreamTeam
};
