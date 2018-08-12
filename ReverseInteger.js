/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let  number = x;
    let digitsArray = ("" + number).split("");

    let reverseArray = digitsArray.reverse();

    if(reverseArray[0] == 0 && reverseArray.length > 1) {
        reverseArray.shift();
    }

    if(reverseArray[reverseArray.length - 1] == '-') {
        reverseArray.pop();
        reverseArray.unshift('-');
    }

    let output = reverseArray.join("");
    output = parseInt(output);
    if (output >= 2147483647 || output <= -2147483648){
        return 0;
    } else {
        return output;
    }
};

reverse(1230);
reverse(-123);
reverse(2147483647);
reverse(-2147483649);
