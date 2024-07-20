//----------------Day 8: ES6+ Features----------------

//Activity 1: Template Literals

//Task 1:
const name = "Srijib"
const age = 21
const city = "Kolkata"
const profession = "Computer Science Student"
const myBio = `Hello, I am ${name}. I am ${age} years old. I am from ${city}. I am a ${profession}.`

console.log(myBio) //  Hello, I am Srijib. I am 21 years old. I am from Kolkata. I am a Computer Science Student.

//Task 2:
const multiLineString = `Hello, I am ${name}.
I am ${age} years old.
I am from ${city}.
I am a ${profession}.`

console.log(multiLineString) 
/*
Hello, I am Srijib.
I am 21 years old.
I am from Kolkata.
I am a Computer Science Student. 
*/

//Activity 2: Destructuring

//Task 3:
const mySemesterGCPA = [9.3, 9.02, 8.34, 7.23, 6.98, 7.43]
const [sem1, sem2, sem3, sem4, sem5, sem6] = mySemesterGCPA
console.log(
    `My GCPA in 1st semester is ${sem1}.
    My GCPA in 2nd semester is ${sem2}.
    My GCPA in 3rd semester is ${sem3}.
    My GCPA in 4th semester is ${sem4}.
    My GCPA in 5th semester is ${sem5}.
    My GCPA in 6th semester is ${sem6}.`);

/* 
My GCPA in 1st semester is 9.3.
My GCPA in 2nd semester is 9.02.
My GCPA in 3rd semester is 8.34.
My GCPA in 4th semester is 7.23.
My GCPA in 5th semester is 6.98.
My GCPA in 6th semester is 7.43.
 */

//Task 4:
const mySpecialBook = {
    title: "Bhagavad-Gita",
    author: "A.C.	Bhaktivedanta	Swami	Prabhupada.",
    year: 1972,
    genre: "Religious",
    pages: 1345,
    country: "India",
    language: "Bengali"
}
const { title, author} = mySpecialBook
console.log(`My favourite book is ${title} written by ${author}.`) // My favourite book is Bhagavad-Gita written by A.C.	Bhaktivedanta	Swami	Prabhupada.

//Activity 3: Spread  and Operators

//Task 5:  
const myFav1 = ["Coding", "Reading", "Travelling", "Listening to Music"]
const myFav2= [...myFav1, "Playing Guitar", "Watching Movies"]
console.log(myFav2) // ["Coding", "Reading", "Travelling", "Listening to Music, "Playing Guitar", "Watching Movies"]

//Task 6: \
function sum(...numbers) { // Rest Operator use to pass multiple arguments
    return numbers.reduce((total, num) => total + num, 0);// explanation of reduce() is given in the next task, parameter 0 is the initial value of total.
  }
  console.log(sum(1, 2, 3, 4, 5)); // 15, arguments are passed as 1, 2, 3, 4, 5

//Activity 4: Default Parameters

//Task 7:
function greet (num, num1=1) { // Default parameter is used here
    return num + num1;
  }
console.log(greet(5)); // 6, only one argument is passed, so the default value of num1 is used.
// log(greet(5, 5)); // 10, two arguments are passed, so the default value of num1 is not used.

//Activity 5: Enhanced Object Literals

//Task 8:
let newName = "Aditya Raj Barua";
let newAge = 22;
let newCity = "Kolkata";
let newProfession = "Computer Science Student";

let personBio = {
    newName,
    newAge,
    newCity,
    newProfession,
    getBio() {
        return `Hello, I am ${this.newName}. I am ${this.newAge} years old. I am from ${this.newCity}. I am a ${this.newProfession}.`;
    }
};
console.log(personBio);
/*
{
    newName: 'Adtya Raj Barua',
    newAge: 22,
    newCity: 'Kolkata',
    newProfession: 'Computer Science Student',
    getBio: [Function: getBio]
}
 */
console.log(personBio.getBio()); //Hello, I am Aditya Raj Barua. I am 22 years old. I am from Kolkata. I am a Computer Science Student.

//Task 9:
const key = "favoriteBook";
const value = "Bhagavad-Gita";

const obj = {
  [key]: value,
};

console.log(obj); // { favoriteBook: 'Bhagavad-Gita' }