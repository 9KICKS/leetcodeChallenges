function convertRomanToInteger(romanNumeral) {
    let result = 0;
    let initialValue = 0;
    let newValue;
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        newValue = getValue(romanNumeral.charAt(i));
        if (newValue < initialValue) {
            result -= newValue;
        } else {
            result += newValue;
        }
        initialValue = newValue;
    }
    return result;
}

function getValue(charAt) {
    switch (charAt.toUpperCase()) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

let romanNumeral = "III";
let romanNumeral2 = "LVIII";
let romanNumeral3 = "MCMXCIV";
let result = convertRomanToInteger(romanNumeral);
let result2 = convertRomanToInteger(romanNumeral2);
let result3 = convertRomanToInteger(romanNumeral3);
console.log(result);
console.log(result2);
console.log(result3);