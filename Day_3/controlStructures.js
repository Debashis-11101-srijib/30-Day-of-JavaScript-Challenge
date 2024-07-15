
//-----------------Day 3: Control Structures----------------

//Activity 1: If-Else Statement

//Task 1:

const checkNumber = (num) => {
if(num > 0)  console.log(`${num} is a positive number`);  
else if(num < 0) console.log(`${num} is a negative number`);
else console.log(`${num} is zero`);
}
checkNumber(-30); // -30 is a negative number

//Task 2:
const checkEligibleToVote = (num) => {
    if(num >= 18) console.log(`You are eligible to vote`);  
    else console.log(`You are not eligible to vote`);
}
checkEligibleToVote(18 ); // You are eligible to vote

//Activity 2: Nested If-Else Statement

//Task 3:
const checkLargestNumber = (num1, num2, num3) => {
    if(num1 > num2){
        if(num1 > num3) console.log(`${num1} is the largest number`);
        else console.log(`${num3} is the largest number`);
    }else{
        if(num2 > num3) console.log(`${num2} is the largest number`);
        else console.log(`${num3} is the largest number`);
    }
}
checkLargestNumber(3, 15, 19); // 19 is the largest number

//Activity 3: Switch Statement

//Task 4:
const checkDay = (day) => {
    switch(day){
        case 1:
            console.log(`Today is Monday`);
            break;
        case 2:
            console.log(`Today is Tuesday`);
            break;
        case 3:
            console.log(`Today is Wednesday`);
            break;
        case 4:
            console.log(`Today is Thursday`);
            break;
        case 5:
            console.log(`Today is Friday`);
            break;
        case 6:
            console.log(`Today is Saturday`);
            break;
        case 7:
            console.log(`Today is Sunday`);
            break;
        default:
            console.log(`Invalid day`);
    }
}
checkDay(4); // Today is Thursday

//Task 5:
const checkScore = (score) => {
    switch(true){
        case score >= 90:
            console.log(`You scored A grade`);
            break;
        case score >= 80:
            console.log(`You scored B grade`);
            break;
        case score >= 70:
            console.log(`You scored C grade`);
            break;
        case score >= 60:
            console.log(`You scored D grade`);
            break;
        default:
            console.log(`You scored F grade`);
    }
}
checkScore(85); // You scored B grade

//Activity 4: Conditional (Ternary) Operator

//Task 6:
const checkEvenOdd = (num) => {
    num % 2 === 0 ? console.log(`${num} is an even number`) : console.log(`${num} is an odd number`);
}
checkEvenOdd(49); // 49 is an odd number

//Activity 5: Combinig Conditions

//Task 7:
const checkLeapYear = (year) => {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) console.log(`${year} is a leap year`);
    else console.log(`${year} is not a leap year`);
}
checkLeapYear(2020); // 2020 is a leap year