/*Q1
let i=0;
for(i=0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
*/

/*Q2
let gamenum=25;
let usernum = prompt("Enter your guess:");
while(gamenum != usernum){
        usernum= prompt("Wrong guess! Try again");
}
console.log("Congratulations! You guessed the number correctly.");0
*/

//Q3
let fullName = prompt("Enter your full name:");
fullName = fullName.trim();
let nameLength = fullName.length;
let username = `@${fullName}${nameLength}`;
console.log("Generated Username: " + username);
alert("Your username is: " + username);