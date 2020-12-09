/*
1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. 
That number should be the number of sheep you have. 
The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence


What is the input to the program?
the number of sheep

What is the output of the program?
A countdown and then completion string

What is the input to each recursive call?
the function and the previous amount of sheep - 1


What is the output of each recursive call?
another recursion or the final All sheep string if it is complete
*/


const countSheep = function(sheep) {
    console.log(sheep + "Another sheep jumped over the fence")
    // Base case
    if (sheep = 1) {
        console.log('All sheep jumped over the fence');
    }
    // General case
    return list[0] + countSheep(sheep - 1);
}

let sheep = 3;
console.log(coutnSheep(sheep));