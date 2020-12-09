/********
 * 
 * 
 * 
 * 
 * 
 * 12. Binary Representation
Write a recursive function that prints out the binary representation of a given number. For example, the program should 
take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.


What is the input to the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call?



 */


const sumOf = function (list) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1));

}

let lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));