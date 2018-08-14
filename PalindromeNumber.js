/**
 * @param {number} x
 * @return {boolean}
 */

//this solution checks if an integer is a palindrome without using any strings
var isPalindrome = function(x) {
    //check for negative inputs
    if (x < 0) {
        return false;
    } else if (x < 10) {
        //numbers less than 10 and greater than 0 are palindromes
        return true;
    } else {
        var array = [];
        //push first digit of the number into array
        array.push(x % 10);
        var copy = x;
        //isolate each digit of the number using division/modulo then push
        while (copy >= 10) {
            copy = Math.floor(copy/10);
            var number = copy % 10;
            array.push(number);
        }
        var arrayReverse = array.slice();
        arrayReverse.reverse();
        //check if the indices values of the reversed array and array are equal
            for(var i=0; i<array.length; i++) {
                if (array[i] != arrayReverse[i]) {
                    return false;
                }
            }
            return true;
        }
};

console.log(isPalindrome(121));
console.log(isPalindrome(0));
console.log(isPalindrome(-121));
console.log(isPalindrome(45));
