// Create a program that accepts a number (1-12) as input and logs to the console the corresponding month

let userinp = prompt("Enter a number 1-12 to see the month")

function monthConvert(x) {
    if (x == 1){
        return "January!"
    } else if (x == 2) {
        return "February!"
    } else if (x == 3) {
        return "March!"
    } else if (x == 4) {
        return "April!"
    } else if (x == 5) {
        return "May!"
    } else if (x == 6) {
        return "June!"
    } else if (x == 7) {
        return "July!"
    } else if (x == 8) {
        return "August!"
    } else if (x == 9) {
        return "September!"
    } else if (x == 10) {
        return "October!"
    } else if (x == 11) {
        return "November!"
    } else if (x == 12) {
        return "December!"
    } else {
        return "The number you entered is less than 1 or greater than 12, tightn up"
    }
}

console.log(monthConvert(userinp));
document.write(monthConvert(userinp));