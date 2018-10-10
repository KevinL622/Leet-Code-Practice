/* Plus one
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // at first will need to addOne
  var addOneNow = true;

    // start from the last element
  for (var i = digits.length - 1; i >= 0;i--){

    // if the currentDigit is less 0~8
    if ( digits[i] < 9){

      // increment the number by 1
      digits[i]++;

       // the end
      return digits;
    } else { // if the currentDigit is 9

    // make it 0, and move to the former element
     digits[i] = 0;
    }
   }

   // if there is still 1 to add
   if(addOneNow){

   // make [9,9,9], [1,0,0,0] not [0,0,0]
     digits.unshift(1);
   }

   return digits;
};
