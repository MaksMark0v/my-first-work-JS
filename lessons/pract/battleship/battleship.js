
// let location1 = 3;
// let location2 = 4;
// let location3 = 5;

// let guess;
// let hits = 0;
// let guesses = 0;

// let isSunk = false;

// while (isSunk == false) {
//     guess = prompt("Ready, aim, fire! (enter a number from 0 - 6:");
//     if (guess < 0 || guess > 6) {
//         alert("Please enter a valid number.");
//     } else {
//         guesses = guesses + 1;
//         if (guess == location1 || guess == location2 || guess == location3) {
//             alert("Hit!");
//             hits = hits + 1;
//             if (hits == 3) {
//                 isSunk = true;
//                 alert("You sank my battleship!")
//             }
//         } else {
//             alert("Miss!");
//         }
//     }
// }

// let stats = "You took" + " " + guesses + " " + " guesses to sink the battleship, " + " which means your shooting accuracy was " + (3/guesses);

// alert(stats);

let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (!isSunk) {
    guess = window.prompt("Готові, намір, вогонь! (введіть число від 0 до 6):");
    if (guess < 0 || guess > 6) {
        window.alert("Будь ласка, введіть дійсне число.");
    } else {
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3) {
            window.alert("Попадання!");
            hits++;
            if (hits === 3) {
                isSunk = true;
                window.alert("Ви потопили мій бойовий корабель!");
            }
        } else {
            window.alert("Промах!");
        }
    }
}

let accuracy = (hits / guesses) * 100;
window.alert(`Вам знадобилося ${guesses} спроб, щоб потопити бойовий корабель. Точність стрільби: ${accuracy.toFixed(2)}%.`);
