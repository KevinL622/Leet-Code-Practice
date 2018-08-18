/**
 * @param {string} s
 * @return {boolean}
 */
 /*
 Given a string containing just the characters
 '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

var isValid = function(s) {
    //define brackets in a string with open and closing next to one another
    const brackets = '{}[]()';
    //define open brackets
    const openBrackets = '{[(';
    //make an array of the characters in the string input
    let array = s.split('');
    //define a stack to put open brackets into when checking the string
    let stack = [];

    /*
    loop through the string array to check for open brackets to push into
    the stack. If the character isn't an open brack check the top of
    the stack for an open brack that matches. If it doesn't match return false.
    If it does match pop the stack.
    */
    for(var i=0; i<array.length; i++){
        if (openBrackets.includes(array[i])) {
            stack.push(array[i]);
        } else {
            if(stack.length == 0) {
                return false;
            } else {
                var topStack = stack.pop();
                if (brackets.indexOf(topStack) !== brackets.indexOf(array[i]) - 1) {
                    return false;
                }
            }
        }
    };

    //after the loop, if the stack is empty that means all brackets matched
    return stack.length == 0 ? true : false;
};

console.log(isValid('{}')); //returns true
console.log(isValid('{[]}')); //returns true
console.log(isValid('{(})')); //returns false
console.log(isValid('{[')); //returns false
