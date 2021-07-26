/*
  Question 3
  
  * Such abbreviations are not always unique, for example:
  
  *   "accessibility" -> "a11y"
  
  *   "automatically" -> "a11y"
  
  * Given a dictionary (a list of words), write a function that takes a word and
  
  * returns true if the abbreviation of the word is unique in the dictionary.
  
  * For example, given a dictionary with the 4 words above:
  
  *   "internationalization" -> true
  
  *   "localization" -> true
  
  *   "accessibility" -> false
  
  *   "automatically" -> false
  
  */

const WORDS = [
	'internationalization',
	'localization',
	'accessibility',
	'automatically',
	'absorbability',
	'hello world',
];

const abbrevBoolean = () => {
	const map = new Map();
	let result = [];

	WORDS.forEach((word) => {
		let abbr = getLocal(word);
		result.push({ keyword: word, result: map.get(abbr) === undefined });

		let pword = map.get(abbr);
		if (pword !== undefined) {
			result
				.filter((d) => d.keyword === pword)
				.forEach((d) => {
					d.result = false;
				});
		}
		map.set(abbr, word);
	});
	return result;
};

const getLocal = (word) => {
	if (word.length < 2) {
		return undefined;
	}

	return word.substring(0, 1) + word.length + word.slice(-1);
};

console.log(abbrevBoolean());
