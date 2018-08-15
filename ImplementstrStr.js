/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 //Function returns indice of the first occurence of a substring in a string
var strStr = function(haystack, needle) {
   var string = haystack;
   var substring = needle;

   if(substring == '') {
       return 0; //return 0 for empty substrings
   } else if (string.includes(substring)) {
       return string.indexOf(substring);
   } else {
       return -1;//return -1 if substring isn't in the string
   }
};

console.log(strStr('mississippi', 'issip')); //returns 4
console.log(strStr('string', '')); //returns 0
console.log(strStr('aaaaa', 'bba')); //returns -1
