// algo that calculates the sum of nums in an array
//     problem needs the following to solve
//     -have a running total
//     -go through list and add each number until the end

const sumOf = function(list) {
    if (list.length === 1) {   // base case
        return list[0];
    }
    return list[0] + sumOf(list.slice(1));  // recursive/general case
        // first item in list + the array, sliced starting and including index 1 (essentially just removes first item in list)
}

let lst = [2,4,6,8,10];
console.log(sumOf(lst));