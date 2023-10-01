/*
## Code Challenges

Challenge 1: **Sort Array with Preserved Index for -1 Values**

You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

All non -1 values in the array should be sorted in ascending order.
The -1 values should retain their original index positions in the sorted array.
*/

function solution (array) {

    // 1. clone the array to avoid mutating the original array
    const sortedArray = array.slice()


    // 2. filter out the -1 elements and sort the remaining numbers
    const sortedNums = sortedArray.filter(num => num !== -1).sort((a, b) => a - b)


    // 3. keep track of the current index in the sorted array
    let sortedindex = 0
    
    // 4. iterate over the original array and replace non-negative numbers with sorted ones
    for (i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== -1){// re-assign the sorted numbers back into the array, unless it is -1
            sortedArray[i] = sortedNums[sortedindex]
            sortedindex++
        }
    }
    return sortedArray
}
// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
//  console.log(solution([100, -1, 50, -1, 75]))



/*
Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. 
The function should find two numbers in the array that add up to the target number and return them as an array. 
If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

const numbers = [2, 4, 7, 11, 15];
const target = 9;

console.log(findSumOfTwo(numbers, target)); // Output: [2, 7]

*/
const numbers = [2, 4, 7, 11, 15];
const moreNumbers = [2, 4, 7, 11, 15, 5, 4,]
const target = 9;

function findSumOfTwo(array, target){
    let result = [];

    for(i = 0; i < array.length; i++){
        
        for(j = i + 1; j < array.length; j++){ 
            // by starting the count here, we avoid a double of target values
                
            if(array[i] + array[j] === target){
                    
                result.push(array[i], array[j])
            }
             console.log(`${array[i]} + ${array[j]} = ${target}`)
        }
    }
    return result
}

//console.log(findSumOfTwo(numbers, target))
// console.log(findSumOfTwo(moreNumbers, target))

/*
Challenge 2: **Count Vowels**

Write a JavaScript function called **`countVowels`** that takes a string as input and counts the
 number of vowels (a, e, i, o, u) in the string. The function should return the count.

Implement the **`countVowels`** function using either the provided example solutions or your own solution.

const input = 'Hello, World!';

console.log(countVowels(input)); // Output: 3
*/

const input = 'Hello, World!';
const vowels = 'aeiou'

function countVowels(string){
let count = 0
   for (i = 0; i < string.length; i++){ // too easy
    switch(string[i]){
        case 'a': count++;
        break;
        case 'e': count++;
        break;
        case 'i': count++;
        break;
        case 'o': count++;
        break;
        case 'u': count++;
    }
   }
   return count
}
// console.log(countVowels(input))
// console.log(countVowels(vowels))

