console.log("Hello world!");
//This is a printing code

let a=5;
let b=3;

/*Arithmetic Operator
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);*/

/*Unary Operations
console.log("a=", a, "& b=", b);
a = a+1;
a++;
console.log(a);
a= a-1;
a--;
console.log(a);
//Preincrement
console.log("++a= ", ++a);
//postincrement
console.log("a++", a++);*/

/*Assignment operators
a *= 4;
console.log("a*=4 =>", a);*/

/*Comparison Operators
console.log("5 == 3 =>", a == b);
console.log("5 != 3 =>", a != b);
console.log("5 === 3 =>", a === b);
console.log("5 !== 3 =>", a !== b);
console.log("5 > 3 =>", a > b);
console.log("5 < 3 =>", a < b);
console.log("5 >= 3 =>", a >= b);
console.log("5 <= 3 =>", a <= b);*/

/*Logival Operators
let cond1= a>b;
let cond2= a ===5;
console.log("cond1 && cond2 =>", cond1 && cond2);
console.log("cond1 || cond2 =>", cond1 || cond2);
console.log("!(5<3) = ", !(a<b));*/

//Conditional Statement
//age
let age = 16;
if(age > 18){
    console.log("you can vote!");
}
else{
    console.log("You can't vote now!")
}

//Color Theme
let mode="light";
if(mode == "dark"){
    color="balck";
}else{
    color ="white";
}
console.log(color);

//Odd Even
let num =11;
if(num % 2 == 0){
    console.log("even");
}else{
    console.log("odd");
}

//Mode
let colormode = "dark"

if (colormode === "dark") {
color = "black";
} else if (colormode === "blue") {
color = "blue";
} else if (colormode === "pink") {
color = "pink";
} else {
color = "white";
}
console.log(color);

//Alternative method for single condition implementation
if(colormode =="dark") console.log(colormode);

//Ternary Operators(compact if-else)
let Age = 25;
let result = Age >= 18 ? console.log("Adult"): console.log("Underage");
//console.log(result);