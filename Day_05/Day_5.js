
//Defining a function
function myfunction(){
    console.log("Hello World");
    console.log("This is my first function");
}

//OR
function message(msg){
    console.log(msg);
}

myfunction(); // Calling the function to execute its code
message("I am a function with a parameter"); // Calling the function with an argument


//Addition function
function sum(a, b){
    c= a + b; // sum of a and b
    return c; // Returns the result
}

// Arrow function
const arrowsum = (a, b) => {
    console.log(a + b);
};

//Multiplication Function
function multiply(a, b){
    return a * b;a
}

const arrowmul=(a,b)=>{
    return a*b;
};

const printhello =() =>{
    console.log("Hello");
}


//ForEach loop
let arr = ["pune", "mumbai", "delhi", "banglore"];
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

//Map method
let arr1 = [1, 2, 3, 4, 5];
let newarr = arr1.map((val)=>{
    return val**2;
});

console.log("New Array: ",newarr);

//Filter method
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = a.filter((val) => {
    return val % 2 === 0;
});

console.log("Even Array: ", even);

//reduce()
//sum
let output=arr1.reduce((res,curr) => {
    return res+curr;
});

console.log("Sum of Array: ", output);

//largest number
let arr2= [10,55, 20, 30, 40, 50];
let largest = arr2.reduce((res, curr) => {
    return res > curr ? res : curr;
});

console.log("Largest Number: ", largest);