window.console.log("Day 6: DOM Manipulation");

//To print all the nodes of html document through javascript
console.dir(document.body);
console.dir(document.head);
console.dir(document.body.childNodes[3]);

//Accessing elements of html
//1.Selecting with id
let heading = document.getElementById("heading1");
console.dir(heading);

//2.Selecting wiht class
let paragraphs = document.getElementsByClassName("paragraph");
console.dir(paragraphs);

let buttons = document.getElementsByClassName("button");
console.dir(buttons);

//3.Selecting with tag name
let parah = document.getElementsByTagName("p");
console.dir(parah);

//4.Selecting with query selector
let heading2 = document.querySelector("#heading1"); //1st element
console.dir(heading2);

let allEl = document.querySelectorAll("p"); //all elements
console.dir(allEl);

let classes = document.querySelector(".paragraph"); //1st element
console.dir(classes);

//DOM Manuipulation properties
//innerText
let div = document.querySelector("#fruits");
console.dir(div.innerText);

//innerHTML
console.dir(div.innerHTML);

//innercontent
let old = document.querySelector("#old");
console.dir(old.textContent);

