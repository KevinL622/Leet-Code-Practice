/**
 * @param {number} x
 * @return {number}
 */

//This function takes a 32-bit signed integer and reverses the digits
var reverse = function(x) {
    //copy the input to avoid modifying the input
    let  number = x;

    //make number into an array of strings and define a reverse array
    let digitsArray = ("" + number).split("");
    let reverseArray = digitsArray.reverse();

    //get rid of 0's at the begining of the integer
    if(reverseArray[0] == 0 && reverseArray.length > 1) {
        reverseArray.shift();
    }

    //get rid of negative sign at the end and put it in the front
    if(reverseArray[reverseArray.length - 1] == '-') {
        reverseArray.pop();
        reverseArray.unshift('-');
    }

    //rejoin and turn into number
    let output = reverseArray.join("");
    output = parseInt(output);

    //check for overflow, return zero for overflow cases
    if (output >= 2147483647 || output <= -2147483648){
        return 0;
    } else {
        return output;
    }
};

console.log(reverse(1230));
console.log(reverse(-123));
console.log(reverse(2147483647));
console.log(reverse(-2147483649));
