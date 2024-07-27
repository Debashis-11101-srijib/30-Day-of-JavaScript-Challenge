//script.js

// Task: 1
document.getElementById("task1").textContent = "New Text Content :- Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

// Task: 2
document.querySelector(".task2").style.backgroundColor = "violet";

// Task: 3 
/*
const newDiv = document.createElement("div");
newDiv.textContent = "Added a new div element to the body.";
document.body.appendChild(newDiv);
*/

// Task: 4 
const newLi = document.createElement("li");
newLi.textContent = "New List Item 4";
document.querySelector("ul").appendChild(newLi);

// Task: 5 
const elementToRemove = document.getElementById("task5");
elementToRemove.remove();

// Task: 6
const parentElement = document.getElementById("task6");
parentElement.lastElementChild.remove();

// Task: 7
document.querySelector("img").setAttribute("src", "./newChai.png");

// Task: 8
const element = document.getElementById("task8");
element.classList.add("newClass");
element.classList.remove("oldClass");

// Task: 9
document.getElementById("task9").addEventListener("click", function () {
    document.getElementById("task9Text").textContent = "New Text: After Click the Button. The Text has been Changed!";
  });

// Task: 10
document.getElementById("task10").addEventListener("mouseover", function () {
    if ( document.getElementById("task10").style.backgroundColor === "red") {
        document.getElementById("task10").style.backgroundColor = "green";
    } else {
        document.getElementById("task10").style.backgroundColor = "red";
    }
});