/********
 * 3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
 


What is the input to the program?
A string

What is the output of the program?
The string, reversed

What is the input to each recursive call?
What is the output of each recursive call?


 * 
 */



const reverseString = function(string) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1));

}

let strng = [2,4,6,8,10];
console.log(reverseString(strng));