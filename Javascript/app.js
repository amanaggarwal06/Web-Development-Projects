// console.log("Hi, My name is Aman");

// let day = prompt("Enter number between 1 to 7");

// switch (day) {

//     case 1: console.log("Monday");
//         break;


//     case 2: console.log("Tuesday");
//         break;

//     case 3: console.log("Wednesday");
//         break;

//     case 4: console.log("Thursday");
//         break;

//     case 5: console.log("Friday");
//         break;

//     case 6: console.log("saturday");
//         break;

//     case 7: console.log("sunday");
//         break;

//     default:
//         console.log("Nothing Matched");

// }

let user_input = parseInt(prompt("Enter the max number"));

while (!user_input) {
    user_input = parseInt(prompt("Enter a valid number please"));
}

const target = Math.floor(Math.random() * user_input) + 1;
console.log(target);

let count = 0;

let guess = parseInt(prompt("Enter your guess"));
count++;

while ( parseInt(guess) !== target ) {
    if(guess === 'q'){
        console.log("congrats");
        break;
    }


    if (guess < target) {
        guess = (prompt("Too low, think of a bigger number"));

    }
    else {
        guess = (prompt("Too High, think of a smaller number"));
    }

    count++;

}

console.log(`Finally you've guessed it correctly, and it took you ${count} attemts to reach your target`);
console.log("Bye bye, see you soon");

