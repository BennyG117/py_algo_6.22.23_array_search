/* 
    Array: Binary Search (non recursive)

    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’ (Continually split in half!),
    taking advantage of the fact that the array is sorted .

    Bonus (alumni interview): 
        first complete it without the bonus, because they ask for additions
        after the initial algo is complete

        return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */


function binarySearch(sortedNums, searchNum) {
    //starting number
    let firstNum = 0;
    //last number of array
    let lastNum = sortedNums.length-1;

    //while firstNum is less than or = to lastNum we complete the following...
    while (firstNum <= lastNum) {
        //identify mid number 
        let midNum = Math.floor((firstNum + lastNum) / 2);
        //if statement to see if mid number = targeted searchNum
        if (sortedNums[midNum] == searchNum) {
            //number matches, return true
            return true;
        //if midNum is < target, then...
        } else if (sortedNums[midNum] < searchNum) {
            //firstNum becomes midNum+1
            firstNum = midNum + 1;
            //firstNum becomes midNum-1
        } else {
            lastNum = midNum - 1;
    }
}
    //then return false
    return false;
    
}
console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));
console.log('====================\n');



/*****************************************************************************/

// Note: The values in the array are assumed to be SORTED from least to greatest.

// While loop, since we don't necessarily know the length of our list every time.

// Keeping track of the index at the start, index at the end, and considering the middle point that we check first. 


/*****************************************************************************/
//! INCOMPLETE solution for count to be added in 



function binarySearchCount(sortedNums, searchNum) {
        //starting number
        let firstNum = 0;
        //last number of array
        let lastNum = sortedNums.length-1;
        let count = 0; 
    
        //while firstNum is less than or = to lastNum we complete the following...
        while (firstNum <= lastNum) {
            //identify mid number 
            let midNum = Math.floor((firstNum + lastNum) / 2);
            //if statement to see if mid number = targeted searchNum
            if (sortedNums[midNum] == searchNum) {
                count++;
                let firstNum = 
                let lastNum = 


                //number matches, return true
                return true;
            //if midNum is < target, then...
            } else if (sortedNums[midNum] < searchNum) {
                //firstNum becomes midNum+1
                firstNum = midNum + 1;
                //firstNum becomes midNum-1
            } else {
                lastNum = midNum - 1;
        }
    }
        //then return false
        return false;
        
    }

console.log(binarySearchCount(nums1, searchNum1));
console.log(binarySearchCount(nums2, searchNum2));
console.log(binarySearchCount(nums3, searchNum3));
console.log(binarySearchCount(nums4, searchNum4));
console.log('====================\n');