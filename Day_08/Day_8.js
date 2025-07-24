let btn1= document.querySelector("button");

//Using DOM Element Property

btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);


    // console.log("Button clicked!");
    // //Sample function
    // let a = 25;
    // a++;
    // console.log(a);
}

let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log("Mouse over div!");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    // let a=0;
    // for(a = 1; a < 2; a++) {
    //         console.log(a);
    // }
};

//Using addEventListener() (Best Practice)
let btn2= document.getElementById("btn");

btn2.addEventListener("click", ()=>{
    console.log("Button clicked using addEventListener!-handler1");
});

const handler2 = ()=>{
    console.log("Button clicked using addEventListener!-handler2");
}
btn2.addEventListener("click", handler2);

btn2.addEventListener("click", ()=>{
    console.log("Button clicked using addEventListener!-handler3");
});

btn2.addEventListener("click", ()=>{
    console.log("Button clicked using addEventListener!-handler4");
});

btn2.removeEventListener("click", handler2);


// btn2.removeEventListener("click", ()=>{
//     console.log("Button clicked using addEventListener!-handler2");
//     });
// This will not work as we haven't given any space to this event in memory