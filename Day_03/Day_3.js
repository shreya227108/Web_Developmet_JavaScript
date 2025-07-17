/*1.For loops in JavaScript
for(let count=1; count<= 10; count++){
    console.log("hello");
}
console.log("Loop has ended");
==================================================================================
*/

/*Calculate sum of 1 to n
let sum = 0;
let n=6;
for(let i = 1; i <= n; i++){
    sum += i; // sum = sum + i
}
console.log("Sum of 1 to " + n + " is: " + sum);
==================================================================================
*/

/*print 1 to 5
for(var i = 1; i <= 5; i++){
    console.log("i= " + i);
}

// This will print 6 because 'i' is declared with var and is function scoped
// if it would have been declared with let, it would not be accessible here
console.log(i);
=================================================================================
*/

/*While loop
let i=1;
while(i <= 5){
    console.log(i);
    i++;
}
=================================================================================
*/

/*Do while loop
let i =1;
do{
    console.log("i= " + i);
    i++;
}while(i <= 5);
=================================================================================
*/

/*For of loop
let str = "HeloEveryone";
let size = 0;
for(let char of str){
    console.log(char);
    size++;
}
console.log("Size of string is: " + size);
=================================================================================
*/

/*for in loop
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in person){
    console.log(key + ": " + person[key]);
}
==================================================================================
*/


//Strings
let str1="ShreyaPatil";
let str2='Swyam';

//length propety
console.log("Length of str1 is: " + str1.length);
console.log("Length of str2 is: " + str2.length);

//Accessing characters using index
console.log("Character at index 0 in str1 is: " + str1[0]);
console.log("Character at index 0 in str2 is: " + str2[0]);

//Template Literals(uses backticks(`))
let sentence = `My name is shreya`;
console.log(typeof sentence);

let obj ={
    item: "Pen",
    price: 100,
};

//Accessing object properties
//1.using string concatenation
console.log("The cost of " + obj.item + " is: " + obj.price + " rupees.");

//2.embedding expressions
let output = `The cost of ${obj.item} is: ${obj.price} rupees.`;
console.log(output);

//Expression enbedding
let exp =  ` this is a tamplet literal ${2 + 3}`;
console.log(exp);

//Multiline strings
let multiLine = `This is a string
that spans multiple
lines.`;
console.log(multiLine);


let str = "JavaScript";
console.log(str.length); // Output: 10
console.log(str.toUpperCase()); // Output: SHREYA
console.log(str.toLowerCase()); // Output: shreya
console.log(str.includes("love")); // true
console.log(str.indexOf("o"));       // 4 (first 'o')
console.log(str.lastIndexOf("o"));   // 7 (last 'o')
console.log(str.slice(0, 4)); // Output: Java
console.log(str.substring(0, 4)); // Output: Java
console.log(str.replace("Script", "Programming")); // Output: JavaProgramming
console.log(str.split("")); // Output: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(str.charAt(1)); // 'a'
console.log(str.charCodeAt(1)); // 97 (ASCII of 'a')
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true

let messy = "   Hello!   ";
console.log(messy.trim()); // Output: "Hello!"

let laugh = "ha";
console.log(laugh.repeat(3)); // Output: hahaha