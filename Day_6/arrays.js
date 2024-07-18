
//------------------- Day_6 Arrays -------------------

//Activity 1: Array Creation and access

//Task 1:
let numbers = [1, 2, 3, 4, 5];
console.log("The Array is:", numbers); // The Array is:[1,2,3,4,5]

//Task 2:
let firstElement = numbers[0];
let lastElement = numbers[numbers.length - 1];  //numbers[5-1] = numbers[4] = 5
console.log("First element:", firstElement); // First element: 1
console.log("Last element:", lastElement); // Last element: 5

//Activity 2: Array Methods

//Task 3:
numbers.push(6); //push method adds a new number to the end of the array
console.log("Then After push element:", numbers); // Then After push element: [1,2,3,4,5,6]

//Task 4:
numbers.pop(); //pop method removes the last element from the array
console.log("Use pop:", numbers); // Use pop: [1,2,3,4,5]

//Task 5:
numbers.shift(); //shift method removes the first element from the array
console.log("Use shift:", numbers); // Use shift: [2,3,4,5]

//Task 6:
numbers.unshift(0); //unshift method adds a new number to the beginning of the array
console.log("Use unshift:", numbers); // Use unshift: [0,2,3,4,5]

//Activity 3: Array Methods (Intermediate)

//Task 7:

const useMap = (numbers) => {
    numbers = numbers.map(value => value * 2);  //map method creates a new array where each number is doubled
    console.log("Create a new Doubled array is:", numbers);
}
useMap(numbers); // Create a new Doubled array is: [0,4,6,8,10]

//Task 8:
const useFilter = (numbers) => {
    numbers = numbers.filter(value => value % 2 === 0);  //filter method creates a new array with only even numbers
    console.log("Create a new Even numbers array is:", numbers);
}
useFilter(numbers); // Create a new Even numbers array is: [0,2,4]

//Task 9:
const useReduce = (numbers) => {
    let sum = numbers.reduce((num, value) => num + value, 0);  //reduce method calculates the sum of all numbers in the array
    console.log("The sum of all numbers:", sum);
}
useReduce(numbers); // The sum of all numbers: 14

//Activity 4: Array Iteration

//Task 10:
const useForLoop = (numbers) => {  
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);  
    }
}
useForLoop(numbers); // 0,2,3,4,5

//Task 11:
const useForEach = (numbers) => {  
    numbers.forEach(value => console.log(value));
}
useForEach(numbers); // 0,2,3,4,5

//Activity 5: Multi-dimensional Array

//Task 12:
let matrix = [ // using square brackets
    [0, 12, 87],
    [21, 73, 6],
    [87, 40, 43]
];
console.log("The Two-dimensional array is:", matrix); // The Two-dimensional array is: [ [ 0, 12, 87 ], [ 21, 73, 6 ], [ 87, 40, 43 ] ]

//Task 13:
const accessElement = (matrix, row, column) => {  
    console.log("The specific element is:", matrix[row][column]);
}
accessElement(matrix, 1, 2); // The specific element is: 6


   