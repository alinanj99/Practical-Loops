//Part 1
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else {
        console.log(i);
    }
}

// Part 2: Prime Time
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

let n = 6;

for (let i = n + 1; ; i++) {

    for (let j = 2; j < i; j++) {

        if (i % j === 0) {
            Primenumber = false;
        }
    }
        console.log(i);
    }

//Part 3: Feeling Loopy
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// log each row of data.
   //You do not need to format the data, the following works well.
   //console.log(cell1, cell2, cell3, cell4);

let csvdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let column = 1;

for (let character of csvdata) {

    console.log(character);

    if (column === 1) {
        cell1 = cell1 + character;
    } else if (column === 2) {
        cell2 = cell2 + character;
    } else if (column === 3) {
        cell3 = cell3 + character;
    } else if (column === 4) {
        cell4 = cell4 + character;
    }

}

console.log(cell1, cell2, cell3, cell4);
