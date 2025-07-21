//Q1

function vowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a"||
            char === "e"||
            char === "i"||
            char === "o"||
            char === "u"||
            char === "A"||
            char === "E"||
            char === "I"||
            char === "O"||
            char === "U"
        ) {
            count++;
        }
    }
    console.log(count);
}

//Q2
const countVow =(str) => {
        let count = 0;
    for (const char of str) {
        if (
            char === "a"||
            char === "e"||
            char === "i"||
            char === "o"||
            char === "u"||
            char === "A"||
            char === "E"||
            char === "I"||
            char === "O"||
            char === "U"
        ) {
            count++;
        }
    }
    console.log(count);
}

//Q3.
numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num*num);
});

//or

let calsquare = (num) => {
    console.log(num * num);
};
    numbers.forEach(calsquare);

//Q4
marks = [85, 90, 78, 92, 88];

let first=marks.filter((mark) => {
    return mark > 90;
});
console.log("Top Marks: ", first);

//Q5
// 1. Take input from user
let n = prompt("Enter a number:");

// 2. Create an array from 1 to n
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

// 3. Use reduce to calculate sum
let sum = arr.reduce((res, curr) => {
    return res + curr;
});

// 4. Use reduce to calculate product
let product = arr.reduce((res, curr) => {
    return res * curr;
});

// 5. Output the results
console.log("Array:", arr);
console.log("Sum:", sum);
console.log("Product:", product);
