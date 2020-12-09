/*********
 * 7. Factorial
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by 
multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
 * 
 * 
 * 
 * 
 * 
 * What is the input to the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call?
 * 
 * 
 * 
 */

const sumOf = function(list) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1));

}

let lst = [2,4,6,8,10];
console.log(sumOf(lst));