/**
 * @param {number[]} nums
 * @return {number}
 */

/*
This function takes a sorted array and removes the duplicates and returns the
length of the filtered array. This is done without creating a new space.
*/
var removeDuplicates = function(nums) {
    //initialize a counter to keep track of the comparisons
    var count=0;
    while (count < nums.length) {
        if(nums[count] == nums[count+1]) {
            //remove one of the repeat values
            nums.splice(count, 1);
        } else {
            //only increase the count if there is no repeating value
            count++;
        }
    }
    console.log(nums);
    return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3, 4, 4, 4]));
