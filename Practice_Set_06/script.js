//Q1
heading.textContent ="Hello Javascript!";
heading.textContent += "from Apna College students";

//Q2
let boxes = document.querySelectorAll(".box");

/*
boxes[0].textContent +="This is first box";
boxes[1].textContent +="This is second box";
boxes[2].textContent +="This is third box";*/

let idx = 1;
for(div of boxes) {
    div.innerText = `This is box number ${idx}`;
    idx++;
}

//Q3
    // Create button element
    const btn = document.createElement("button");

    // Add text
    btn.textContent = "click me";

    // Style the button
    btn.style.backgroundColor = "red";
    btn.style.color = "white";

    // Insert as the first element in body
    document.body.prepend(btn);

//Q4
    const para = document.getElementById("myPara");

    // ❌ If you use this, it OVERWRITES the existing class
    // para.className = "highlight";

    // ✅ Use classList to ADD without overwriting
    para.classList.add("highlight");



