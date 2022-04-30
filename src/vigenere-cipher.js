const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(rev = true) {
		this.rev = rev;
	}

	encrypt(a, b) {
		if (!a || !b)
			throw new Error("Incorrect arguments!");
		let ch = [];
		for (var i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); ++i) {
			ch.push(String.fromCharCode(i));
		}
		let m = a.toUpperCase().split("");
		let k = b.toUpperCase().split("");
		let count = 0;
		let fInd = -1;
		let sum = 0;
		let result = [];
		for (let i of m) {
			if (ch.indexOf(i) == -1) {
				result.push(i);
				continue;
			}
			sum = ch.indexOf(i) + ch.indexOf(k[count]);
			if (ch.length - sum - 1 < 0)
				fInd = Math.abs(ch.length - sum - 1) - 1;
			else
				fInd = sum;
			result.push(ch[fInd]);
			++count;
			if (count == k.length)
				count = 0;
		}
		return (this.rev == false) ? result.reverse().join("") : result.join("");
	}
	decrypt(a, b) {
		if (!a || !b)
			throw new Error("Incorrect arguments!");
		var ch = [];
		for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); ++i)
			ch.push(String.fromCharCode(i));
		let m = a.toUpperCase().split("");
		let k = b.toUpperCase().split("");
		let result = [];
		let count = 0;
		for (let i of m) {
			if (ch.indexOf(i) == -1) {
				result.push(i);
				continue;
			}
			let mInd = ch.indexOf(i);
			let kInd = ch.indexOf(k[count]);
			let fInd = 1 + (mInd > kInd) ? mInd - kInd : kInd - mInd;
			if (fInd < 0)
				fInd = ch.length + fInd;
			result.push(ch[fInd]);
			++count;
			if (count == k.length)
				count = 0;
		}
		return (this.rev === false) ? result.reverse().join("") : result.join("");
	}
}

module.exports = {
	VigenereCipheringMachine
};
