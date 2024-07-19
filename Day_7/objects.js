
//-----------------Day 7: Objects-----------------

//Activity 1: Object Creation and Access

//Task 1: 
const createBook = () => {
  const book = { //creating an object
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    };
    return book;
}
console.log(createBook()); // { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 }

//Task 2:
console.log("Title: " + createBook().title); // Title: JavaScript: The Good Parts
console.log("Author: " + createBook().author); // Author: Douglas Crockford,

//Activity 2: Object Methods

//Task 3:  
const newBook = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,

    bookInfo: function() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(newBook); // { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008, bookInfo: [Function: bookInfo] }

console.log(newBook.bookInfo()); // JavaScript: The Good Parts by Douglas Crockford

//Task 4: 
const updatebook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 2020,
    

    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    
    // Add a method that updates the book's year property
    updateYear: function(newYear) {
        this.year = newYear;
    }
};

console.log(updatebook); // { title: 'To Kill a Mockingbird',


console.log(updatebook.getDetails()); // To Kill a Mockingbird by Harper Lee

updatebook.updateYear(2024); // Update the year of the book to 2024

console.log(updatebook); 
/*
{
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 2024,
  getDetails: [Function: getDetails],
  updateYear: [Function: updateYear]
} 
*/


//Activity 3: Nested Objects

//Task 5:
let library = {
    name: "Malda Library",
    books: [
        {
            title: "JavaScript: The Good Parts", 
            author: "Kyle Simpson"
        },
        {
            title: "You Don't Know JS",
            author: "Eloquent JavaScript"
        }
    ]
};
console.log(library); 
/*
{
  name: 'Malda Laibrary',
     books: [
        {
            title: "JavaScript: The Good Parts", 
            author: "Kyle Simpson"
        },
        {
            title: "You Don't Know JS",
            author: "Eloquent JavaScript"
        }
    ]
}
*/

//Task 6:
console.log(library.name); // Malda Library
library.books.forEach((book) => {
    console.log(book.title);
});
/*
JavaScript: The Good Parts
You Don't Know JS
*/

//Activity 4: The `this` Keyword

//Task 7:
newBook.getTittleAndYear = function() {
    return `${this.title} was published in ${this.year}`;
}
console.log(newBook.getTittleAndYear()); // JavaScript: The Good Parts was published in 2010

//Activity 5: Object iteration

//Task 8:
for (let key in newBook) {
    if (newBook.hasOwnProperty(key)) {
        console.log(`${key}:-- ${newBook[key]}`);
    }
}
/*
title:-- JavaScript: The Good Parts
author:-- Douglas Crockford
year:-- 2008
bookInfo:-- function() {
        return `${this.title} by ${this.author}`;
    }
getTittleAndYear:-- function() {
    return `${this.title} was published in ${this.year}`;
}
*/

//Task 9:
console.log('Keys: ' + Object.keys(newBook)); // Keys: title,author,year,bookInfo,getTittleAndYear

console.log('Values: ' + Object.values(newBook));  
/*
Values: JavaScript: The Good Parts,Douglas Crockford,2008,function() {
        return `${this.title} by ${this.author}`;
    },function() {
    return `${this.title} was published in ${this.year}`;
}
*/