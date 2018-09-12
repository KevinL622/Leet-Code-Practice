/*
Two Sum Leetcode Problem
Given an array of integers, return indices of the two numbers such that
they add up to a specific target.

You may assume that each input would have exactly one solution, and you may
not use the same element twice.
*/

/*
Example
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/* Approaches
brute force double for loop O(n^2) worst case

use a hash table O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var pairIndex = [];//if you want the indices
    var pairNumber = [];//if you want the numbers themselves
    var hash = {};

    for(var i=0; i < nums.length; i++){
        var difference = target - nums[i];
        if(hash[difference.toString()] !== undefined){
            pairIndex.push(i, nums.indexOf(difference));
            pairNumber.push(nums[i], difference)
        }
        hash[nums[i].toString()] = nums[i];
    }
    console.log(pairNumber);
    return pairIndex;
};

//test
twoSum([3, 5, 2, -4, 8, 11], 7);
