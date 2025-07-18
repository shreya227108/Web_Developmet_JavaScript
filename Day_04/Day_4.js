
//Array
let marks=[10,20,25,40];
console.log(marks);
console.log("Length of Array: " +marks.length);

let heroes=['IronMan', 'BatMan', 'Thor', 'SpiderMan','Hulk'];
console.log(heroes);
console.log(typeof heroes);
console.log(heroes[2]);

//Methods of Array
let fruits = ["apple", "banana", "mango"];

fruits.push("orange");               // Add at end
fruits.pop();                        // Remove last
fruits.shift();                      // Remove first
fruits.unshift("kiwi");              // Add at start

console.log("Length:", fruits.length);        // Length
console.log("Index of banana:", fruits.indexOf("banana")); 
console.log("Includes mango:", fruits.includes("mango")); 

fruits.splice(1, 1, "pear", "grapes");        // Replace at index 1
console.log("Splice result:", fruits);

let sliced = fruits.slice(1, 3);              // Copy part
console.log("Slice result:", sliced);

console.log("forEach:");
fruits.forEach(f => console.log(f));          // Loop through

let upper = fruits.map(f => f.toUpperCase()); // New transformed array
console.log("Mapped:", upper);

console.log("ToString:", fruits.toString());  // Convert to string


//Looping through an Array
//1.for loop
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}
//for-each loop
let numbers = [10, 20, 30];
numbers.forEach(function(num) {
  console.log(num);
});

//for-of loop
for(let hero of heroes){
    console.log(hero);
}

 