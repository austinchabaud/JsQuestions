/*
  Question 2 (2, 3, build off each other)
  
  * Consider the following style of abbreviation:
  
  *   (first letter) + (count of removed letters) + (last letter)
  
  * For example:
  
  *   "internationalization" -> "i18n"
  
  *   "localization" -> "l10n"
  
  * Write a function that given any word returns its abbreviation.
  
  */
const abbr = (str) => {
	return str.charAt(0) + (str.length - 2) + str.charAt(str.length - 1);
};
console.log(abbr('internationalization'));
