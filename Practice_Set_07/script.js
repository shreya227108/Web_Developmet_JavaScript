//Q1

let button = document.createElement("button");
button.textContent = "click me";
button.style.backgroundColor = "red";
button.style.color = "white";

document.body.prepend(button); // inserts at top of <body>

//Q2
let para = document.getElementById("myPara");
para.classList.add("newClass"); // safely adds without removing old class
