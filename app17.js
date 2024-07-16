let max=prompt("Enter a number");
console.log(max);
const num=Math.floor(Math.random()*max) +1;
console.log(num);
let guess=prompt("Guess the random generated no.");

while (true) {
    if (guess=="quit") {
        console.log("quitting the App");
        break;
    }
    if (guess==num) {
        console.log("you guess it right", num);
        break;
    }else if (guess<num) {
        guess=prompt("Your guess is Too small");
    }else{
        prompt("Try again!");
    }
    guess=prompt("Guess the random generated no.");
}