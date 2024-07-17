
//-----------------Day_5 Function----------------

//Activity 1: Function Declaration

//Task 1:
const checkEvenOdd = function(num) {
    if(num % 2 === 0) console.log(`${num} is an even number`);
    else console.log(`${num} is an odd number`);
}
checkEvenOdd(32); // 32 is an even number
checkEvenOdd(49); // 49 is an odd number

//Task 2:
const calculateSquare = function(num){
    console.log(`The square of ${num} is: ${num * num}`);
}
calculateSquare(8); // The square of 8 is: 64
calculateSquare(9); // The square of 9 is: 81

//Activity 2: Function Expression

//Task 3:
const findMaximumNumber = function(num1, num2){
    if(num1 > num2) console.log(`${num1} is the maximum number`);
    else console.log(`${num2} is the maximum number`);
}   
findMaximumNumber(42 , 19); // 42 is the maximum number

//Task 4:
const concatenateStrings = function(str1, str2){
    console.log(`The concatenated string is: ${str1} ${str2}`);
}

concatenateStrings("ChaiAur", "Code."); // The concatenated string is: ChaiAur Code

//Activity 3: Arrow Function

//Task 5:
const calculateSum = (num1, num2) => console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);
calculateSum(42 , 76); // The sum of 42 and 76 is: 118

//Task 6:
const containsCharacter = (str, char) => {
    if(str.includes(char)) console.log(`${str} contains the character ${char}`);
    else console.log(`${str} does not contain the character ${char}`);
}
containsCharacter("ChaiAurCode", "A"); // ChaiAurCode contains the character A
containsCharacter("ChaiAurCode", "P"); // ChaiAurCode does not contain the character P

//Activity 4: Function with Default Parameters

//Task 7: 
const calculateProduct = (num1, num2 = 4) => console.log(`The product of ${num1} and ${num2} is: ${num1 * num2}`);
calculateProduct(40);  // The product of 40 and 4 is: 160
calculateProduct(40, 5); // The product of 40 and 5 is: 200


//Task 8:   
const greetPerson = (name, age = 25) => console.log(`Hello ${name}, you are ${age} years old.`);
greetPerson("Srijib"); // Hello Srijib, you are 25 years old.
greetPerson("Srijib", 23); // Hello Srijib, you are 23 years old.


//Activity 5: Higher Order Function

//Task 9: 
const repeatFunction = (func, num) => {
    for(let i = 1; i <= num; i++){
        func();
    }
}
repeatFunction(() => console.log("Chai Aur Code"), 5);
/* 
Chai Aur Code
Chai Aur Code
Chai Aur Code
Chai Aur Code
Chai Aur Code
*/


//Task 10:  
const higherOrderFunction = (func1, func2, value) => {
    const result1 = func1(value);
    const result2 = func2(result1);
    console.log(result2);
}
const double = (num) => num * 2;
const square = (num) => num * num;
higherOrderFunction(double, square, 5); // 100
 