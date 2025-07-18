//Q1
let marks=[85,97,44,37,76,60];
let sum = 0;

for(let i=0; i<marks.length; i++){
    sum += marks[i];
}
let average = sum / marks.length;
console.log("Average: " + average);



//Q2
let prices =[250,645,300,900,50];

for(let i=0; i<prices.length; i++){
    let offer = prices[i] / 10; // 10% discount
    prices[i] -= offer;
}
console.log("Prices after discount: " + prices);



//Q3
companies=["Bloomberg", "Uber", "Facebook","Google", "Apple", "Microsoft"];
//1.
companies.shift(); // Remove first company
console.log("After removing first company:", companies);

//2.
companies.splice(1, 1, "Ola");
console.log("After replacing second company:", companies);

//3.
companies.push("Amazon"); // Add Amazon at the end
console.log("After adding Amazon:", companies);