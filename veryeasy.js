// write function named min that takes two arguements and returns their minimum

let fnum = 29;
let snum = 274;

function min(x, y) {
    if (x < y) {
        return `The minimum is ${x}`;
    } else {
        return `The minimum is ${y}`;
    }
}

console.log(min(fnum, snum));