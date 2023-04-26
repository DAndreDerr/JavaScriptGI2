let tomMass = 8; //8 grams
let tomHeight = 9; //9 inches
let jerryMass = 45; //45 grams
let jerryHeight = 10; //10 inches

// this function converts inches to meters
function inchToMeters(x) {
    return x / 39.37;
}

// this function converts grams to kilograms
function gramsToKilograms(x) {
    return x / 1000;
}

// this function calculates BMI using the formula BMI = mass / (height * height) (mass in kg and height in meter).
function bmi(m, h) {
    return m / (h * h);
}

let tomMassConverted = gramsToKilograms(tomMass);
let tomHeightConverted = inchToMeters(tomHeight)
let jerryMassConverted = gramsToKilograms(jerryMass);
let jerryHeightConverted =inchToMeters(jerryHeight)

let tomHigherBMI = bmi(tomMassConverted, tomHeightConverted) > bmi(jerryMassConverted, jerryHeightConverted);
console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherBMI}`);