// Setup
const myArr = [2, 3, 4, 5, 6];

/*
Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
*/
// Only change code below this line
let total=0;

for (let i=0; i < myArr.length; i++){
  total += myArr[i];
}

console.log(total);

/*
Code Explanation
Initialization: i gets a value of 0 and its used as a counter.
Condition: the subsequent code is executed as long as i is lower than the length of myArr (which is 5; five numbers but arrays are zero based).
Final-expression: i is incremented by 1.
Statement: The function adds myArr[i]'s value to total until the condition isn’t met like so:
total + myArr[0] -> 0 + 2 = 2 
total + myArr[1] -> 2 + 3 = 5
total + myArr[2] -> 5 + 4 = 9
total + myArr[3] -> 9 + 5 = 14 
total + myArr[4] -> 14 + 6 = 20
*/
