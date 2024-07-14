//Activity 1  Variable Declartion

//Task 1:
var num = 10; // Number using var
console.log(`The value of num is: ${num}`); // The value of num is: 10
console.log(`This data type of num is: ${typeof num}`); // This data type of num is: number

//Task 2:
let str = "Hey, this is 1st day of javascript challelge"; // String using let
console.log(`The value of str is: ${str}`); // The value of str is: Hey, this is 1st day of javascript challelge
console.log(`This data type of str is: ${typeof str}`); // This data type of str is: string


//Activity 2 Constant Declaration

//task 3:
const isTrue = true; // Boolean using const
console.log(`The value of isTrue is: ${isTrue}`); // The value of isTrue is: true
console.log(`This data type of isTrue is: ${typeof isTrue}`); // This data type of isTrue is: boolean


//Activity 3 Constant Declaration

//task 4:
const number = 10; // Number using const
console.log(`The value of number is: ${number}`); // The value of number is: 10

const string = "Hey, this is 1st day of javascript challelge"; // String using const
console.log(`The value of string is: ${string}`); // The value of string is: Hey, this is 1st day of javascript challelge

const numberArray = ["Computer Science", "Information Technology", "Electrical Engineering"]; // Array using const
console.log(`The value of numberArray is: ${numberArray}`); // The value of numberArray is: Computer Science,Information Technology,Electrical Engineering;

const object = { 
    name: "Srijib",
    age:"21",
    department: "Computer Science"
}; // Object using const
console.log(`Name is: ${object.name}, Age is: ${object.age}, Department is: ${object.department}`); // Name is: Srijib, Age is: 21, Department is: Computer Science


//Activitype 4 Variable Declaration

//Task 5:
let num1 = 10; // Reassigning the value of num using let
console.log(`The value of num1 is: ${num1}`); // The value of num1 is: 10
num1 = 20;
console.log(`The value of num1 is: ${num1}`); // The value of num1 is: 20

//Activity 5 Constant Declaration

//Task 6:
const num2 = 10; // Reassigning the value of num using const
console.log(`The value of num2 is: ${num2}`); // The value of num2 is: 10
// num2 = 20; 
// console.log(`The value of num2 is: ${num2}`); // Uncaught TypeError: Assignment to constant variable.




//Features Request ------------------------------------------

// 1. Declare variables of different data types:

const checkDataType = (data) => { //Script for log datatype and its value
    console.log(`The value of data is: ${data}`);
    console.log(`This data type of data is: ${typeof data}`);
} 
checkDataType("Debashis"); // String data type, this script that declares variables of different data types.
checkDataType(21); // 21, Number data type.
checkDataType(true); // true, Boolean data type.
checkDataType(["Computer Science", "Information Technology", "Electrical Engineering"]); // Computer Science,Information Technology,Electrical Engineering, Array data type.
checkDataType({ 
    name: "Srijib",
    age:"21",
    department: "Computer Science"
}); // Object data type.


// 2. Reassign the value of variables declared using let and const keywords:

const checkVriaable = (data) => { //Script for log datatype and its value
    let firstData = data;
    console.log(`The value of firstData is: ${firstData}`);
    firstData = "Reassigned";
    console.log(`The value of firstData is: ${firstData}`);

    const secondData = data;
    console.log(`The value od secondData is: ${secondData}`);
    // secondData = "Reassigned";
    // console.log(`The value of secondData is: ${secondData}`); // Uncaught TypeError: Assignment to constant variable.
}
checkVriaable("Debashis"); // Reassigned, Reassigned, Debashis, Debashis
