let div = document.querySelector("div");
console.log(div);

//getAttribute
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//setAttribute
div.setAttribute("id", "newId");
console.log(div.getAttribute("id"));

para.setAttribute("class", "newClass");
console.log(para.getAttribute("class"));

//style
div.style.color = "white";
div.style.backgroundColor = "olive";
console.log(div.style);

let newBtn = document.createElement("button");
newBtn.textContent = "Click Me";
console.log(newBtn);

//Add button just before div
// div.before(newBtn);

//Add button into div on webpage at first
//div.prepend(newBtn);

//Add button into div on webpage at last
//div.appendChild(newBtn);

//Add button after para
para.after(newBtn);

// removes the paragraph directly
// let dpara = document.getElementById("text");
// dpara.remove(); 

//Remove child using parent node(treditional way)
let container = document.getElementById("container");
let dpara = document.getElementById("text");

container.removeChild(dpara); 

