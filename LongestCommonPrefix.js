/*
Write a function to find the longest common prefix string amongst an array
of strings.

If there is no common prefix, return an empty string "".

note all given inputs are lowercase.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //rule out empty arrays
    if(!strs.length || strs.length === 0){
        return "";
    }

    //sort array in alphabetical order
    var sortedArray = strs.sort();
    //the biggest difference would be between the first and last words
    var first = sortedArray[0];
    var last = sortedArray[sortedArray.length - 1];
    //keep track of the index being checked
    var i = 0;
    while (i < first.length && first.charAt(i) === last.charAt(i)) {
        i++;
    };

    return first.substring(0, i);
};

//test
longestCommonPrefix(["flower","flow","flight"]);
longestCommonPrefix(["dog","racecar","car"]);
