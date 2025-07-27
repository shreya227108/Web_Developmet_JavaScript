//timeout is a function in timeout will be executed after the miliseconds mentioned

/*
//Async
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 8000);

console.log("three");
console.log("four");*/
//here one two three four does not wait for timeout to executed

//===================================================================================

/*
//Callback
function sum(a, b){
    console.log(a +b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(1,3, (a,b) =>{
    console.log(a +b);
});
*/

//===================================================================================

/*
//callback hell
function getdata(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000);
}

getdata(1, () =>{
    getdata(2, () =>{
        getdata(3);
    });
});
*/

//=====================================================================================

/*
//Promises
const promise = new Promise((resolve, reject) => {
  let success = true;
  
  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then((result) => console.log(result))      // on success
  .catch((error) => console.error(error));    // on failure
*/

//=====================================================================================

/*
//Promise Chaining
function taskOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 complete");
      resolve("Data from Task 1");
    }, 1000);
  });
}

function taskTwo(dataFromTaskOne) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 complete");
      resolve(dataFromTaskOne + " ➜ Task 2 done");
    }, 1000);
  });
}

function taskThree(dataFromTaskTwo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 complete");
      resolve(dataFromTaskTwo + " ➜ Task 3 done");
    }, 1000);
  });
}

// 🔗 Promise Chaining
taskOne()
  .then(result1 => {
    return taskTwo(result1);
  })
  .then(result2 => {
    return taskThree(result2);
  })
  .then(finalResult => {
    console.log("All tasks finished:");
    console.log(finalResult);
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  });
*/
//=======================================================================================

//Async/Await
function waitForIt() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done waiting!"), 2000);
  });
}

async function doWork() {
  console.log("Start");
  const result = await waitForIt();  // waits here
  console.log(result);
  console.log("End");
}

doWork();

//============================

//IIFE
(function() {
  let message = "Hello from IIFE!";
  console.log(message);
})();

//IIFE with Parameters
(function(name) {
  console.log("Hello, " + name);
})("Shreya");
