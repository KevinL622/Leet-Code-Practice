/*
Given an array nums and a value val, remove all instances of that value in-place
 and return the new length.

Do not allocate extra space for another array, you must do this by modifying the
input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond
the new length.
*/

/*
Examples

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums
being 2.

It doesn't matter what you leave beyond the returned length.


Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums
 containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let array = nums;
    var count = 0;
    while (count < array.length) {
        if(array[count] === val) {
            //remove one of the repeat values
            nums.splice(count, 1);
        } else {
            //only increase the count if there is no repeating value
            count++;
        }
    }
    console.log(array);
    return array.length;
};

//tests
removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

/*
LeetCode solution

two pointers Java
public int removeElement(int[] nums, int val) {
    int i = 0;
    for (int j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}

*/
