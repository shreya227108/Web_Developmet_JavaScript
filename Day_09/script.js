//Without Prototype
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const student1 = new Student("Shreya", 21);
student1.displayInfo();  // Output: Name: Shreya, Age: 21


const student2 = new Student("Swyam", 21);
student2.displayInfo();  // Output: Name: Shreya, Age: 21`

console.log(student1.name);

//=======================================================================================

//With prototype
function Person(name) {
  this.name = name;
}

// Method defined on prototype (shared among all instances)
Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const p1 = new Person("Shreya");
const p2 = new Person("Rahul");

p1.sayHello(); // Hello, I'm Shreya
p2.sayHello(); // Hello, I'm Rahul

//========================================================================================

//Inheritance in JS
class Human{
    constructor(){
        this.species = "homo sepiens";
    }

    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("sleep");
    }
    Work(){
        console.log("Do Nothing");
    }
}

class Engineer extends Human{
    //Method Overriding
    Work(){
        console.log("solve problem, build something");
    }
}

class Doctor extends Human{
    //Method Overriding
    Work(){
        console.log("check patients and give medicinesg");
    }
}

let shreya = new Engineer();
let swyam = new Doctor();
let h1 = new Human();
let h2 = new Doctor();

shreya.Work();
swyam.Work();

//======================================================================

//Super Keyword
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello from Parent, ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // calls Parent constructor
    this.age = age;
  }

  greet() {
    super.greet(); // calls greet() from Parent
    console.log(`And hello from Child, age: ${this.age}`);
  }
}

//--------------------------------------------------------------------

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // calls speak() from Animal
    console.log("Dog barks");
  }
}

let d = new Dog();
d.speak();

//=================================================================

//Error handling
//1.try...catch Block
let a =5;
let b = 10;
console.log(a);
console.log(b);
console.log(a+b);
console.log(a+b);

try{
  console.log(a+c); //error
}catch(err){
  console.log(err);
}

console.log(a+b);
console.log(a+b);

//------------------------------------------------------------------

//2.trow Keyword
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(4, 0));
} catch (err) {
  console.log(err.message);
}

//-----------------------------------------------------------------

//3.finally Block
try {
  console.log("Start");
  throw new Error("Oops!");
} catch (err) {
  console.log("Caught error:", err.message);
} finally {
  console.log("Always runs");
}

//========================================================================