/*
Length of the Last Word

Given a string s consists of upper/lower-case alphabets and empty space
characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space
characters only.

Example:

Input: "Hello World"
Output: 5
*/

/*
Approach
Start from last character and test for space add 1 to count for each non space.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //get rid of lagging spaces at beginning and end
    let x = s.trim();
    //rule out empty strings
    if(x.length==0){
        return 0;
    } else if (/\s/g.test(x) == false) {
        //if not an empty string and has no spaces return string length
        return x.length;
    }
    //Keep count of how many characters until a space starting from the last one
    let count = 0;
    let i= x.length - 1;
    while (i>-1){
        if (x[i] == ' '){
            console.log(count);
            return count;
        } else {
            count++;
            i--;
        }
    }
};

lengthOfLastWord("Hello World"); //5
lengthOfLastWord("Hello"); //5
lengthOfLastWord(""); //0
lengthOfLastWord(" "); //0
lengthOfLastWord("   "); //0
