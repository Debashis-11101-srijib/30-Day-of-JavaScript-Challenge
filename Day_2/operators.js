//---------Day 2: Operators-----------


//Activity 1: Arithmetic Operators
//Task 1:
const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is: ${sum}`); // The sum of 10 and 20 is: 30

//Task 2:
const sub = num1 - num2;
console.log(`The sub of ${num1} and ${num2} is: ${sub}`); // The sub of 10 and 20 is: -10

//Task 3:
const mul = num1 * num2;
console.log(`The mul of ${num1} and ${num2} is: ${mul}`); // The mul of 10 and 20 is: 200

//Task 4:
const div = num1 / num2;
console.log(`The div of ${num1} and ${num2} is: ${div}`); // The div of 10 and 20 is: 0.5

//Task 5:
const remainder = num1 % num2;
console.log(`The remainder of ${num1} and ${num2} is: ${remainder}`); // The remainder of 10 and 20 is: 10


//Activity 2: Assignment Operators
//Task 6:
let x = 10;
let y = 20;
x += y;
console.log(`The value of x is: ${x}`); // The value of x is: 30

//Task 7:
x -= y;
console.log(`The value of x is: ${x}`); // The value of x is: 10

//Activity 3: Comparison Operators
//Task 8:
const num3 = 30;
const num4 = 40;
if(num3 > num4){
    console.log(`${num3} is greater than ${num4}`); // 30 is greater than 40
}else if(num3 < num4){
    console.log(`${num3} is less than ${num4}`); // 30 is less than 40
}

//Task 9:
if(num3 >= num4){
    console.log(`${num3} is greater than or equal to ${num4}`); // 30 is greater than or equal to 40
} else if(num3 <= num4){
    console.log(`${num3} is less than or equal to ${num4}`); // 30 is less than or equal to 40
}

//Task 10:
if(num3 == num4){
    console.log(`${num3} is equal to ${num4}`); // 30 is equal to 40
}else if(num3 === num4){
    console.log(`${num3} is strictly equal to ${num4}`); // 30 is strictly equal to 40  
}

//Activity 4: Logical Operators
//Task 11:
const num5 = 50;
const num6 = 60;
if(num5 > num6 && num5 > num4){
    console.log(`${num5} is greater than ${num6} and ${num4}`); // 50 is greater than 60 and 40
}

//Task 12:
if(num5 > num6 || num5 > num4){
    console.log(`${num5} is greater than ${num6} or ${num4}`); // 50 is greater than 60 or 40
}

//Task 13:
if(!(num5 > num6)){
    console.log(`${num5} is not greater than ${num6}`); // 50 is not greater than 60
}

//Activity 5: Ternaary Operator
//Task 14: 
const checkNum = (num) => {
    num > 0 ? console.log(`${num} is a positive number`) : console.log(`${num} is a negative number`); // -10 is a negative number
}
checkNum(-10);

