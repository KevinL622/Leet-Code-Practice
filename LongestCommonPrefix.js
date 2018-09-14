/*
Write a function to find the longest common prefix string amongst an array
of strings.

If there is no common prefix, return an empty string "".

note all given inputs are lowercase.
*/

/*
Approaches

1) Horizontal Scanning
O(s) time complexity where s is the sum of all the characters in all strings
0(1) space complexity
var longestCommonPrefix = function(strs) {
    if(strs.length === 0 || strs == null){return "";}

    var firstWord = strs[0];

    for(var i = 1; i<strs.length; i++){
        while(strs[i].indexOf(firstWord) != 0){
            firstWord = firstWord.substr(0, firstWord.length - 1);
            if(firstWord.length == 0){return "";}
        }
    }
    return firstWord;
};

2) Vertical Scanning
public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    for (int i = 0; i < strs[0].length() ; i++){
        char c = strs[0].charAt(i);
        for (int j = 1; j < strs.length; j ++) {
            if (i == strs[j].length() || strs[j].charAt(i) != c)
                return strs[0].substring(0, i);
        }
    }
    return strs[0];
}
3) Divide and conquer
takes up memory

4)Binary Search
O(S*logN)
O(1)

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
