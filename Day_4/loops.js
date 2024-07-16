
//-------------Day 4: Loops----------------

//Activity 1: For Loop

//Task 1:
const printNumbers = (num) => {
    for(let i = 1; i <= num; i++){
        console.log(i);
    }
}
printNumbers(10); // 1 2 3 4 5 6 7 8 9 10

//Task 2:
const printTable = (num) => {
    for(let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
printTable(5); // 5 * 1 = 5, 5 * 2 = 10, 5 * 3 = 15, 5 * 4 = 20, 5 * 5 = 25, 5 * 6 = 30, 5 * 7 = 35, 5 * 8 = 40, 5 * 9 = 45, 5 * 10 = 50

//Activity 2: While Loop

//Task 3: 
const calculateSum = (num) => {
    let i = 1;
    let sum = 0;
    while(i <= num){
        sum += i;
        i++;
    }
    console.log(`The sum of numbers from 1 to ${num} is: ${sum}`);
}
calculateSum(10); // The sum of numbers from 1 to 10 is: 55

//Task 4:
const printNumbersReverse = (num) => {
    let i = num;
    while(i >= 1){
        console.log(i);
        i--;
    }
}
printNumbersReverse(10); // 10 9 8 7 6 5 4 3 2 1

//Activity 3: Do-While Loop

//Task 5:
const printEvenNumbers = (num) => {
    let i = 1;
    do{
        console.log(i);
        i += 1;
    }while(i <= num);
}
printEvenNumbers(5); // 1 2 3 4 5

//Task 6:
const calculateFactorial = (num) => {
    let i = 1;
    let fact = 1;
    do{
        fact *= i;
        i++;
    }while(i <= num);
    console.log(`The factorial of ${num} is: ${fact}`);
}
calculateFactorial(8); // The factorial of 8 is: 40320

//Activity 4: Nested Loops

//Task 7: 
const printPattern = (num) => {
    for(let i = 1; i <= num; i++){
        let pattern = '';
        for(let j = 1; j <= i; j++){
            pattern += '* ';
        }
        console.log(pattern);
    }
}
printPattern(5);  
/*
*
* *
* * *
* * * *
* * * * *
*/

//Activity 5: Loop Control Statements

//Task 8:
const usingContinue = (num) => {
    for(let i = 1; i <= num; i++){
        if(i === 5) continue;
        console.log(i);
    }
}
printOddNumbers(10); // 1 2 3 4 6 7 8 9 10

//Task 9:
const usingBreak = (num) => {
    for(let i = 1; i <= num; i++){
        if(i === 7) break;
        console.log(i);
    }
}
printEvenNumbers(10); // 1 2 3 4 5 6