function plusOne(digits) {
    let carryOver = 1;
    let i = digits.length - 1;
    while (i >= 0 && digits[i] === 9) {
        i--;
    }
    if (i === - 1) {
        let result = new Array(digits.length + 1).fill(0);
        result[0] = 1;
        return result;
    }
    let result = digits.slice();
    result[i]++;
    for (let j = i + 1; j < result.length; j++) {
        result[j] = 0;
    }
    return result;
}

let digits = [1,2,3];
let digits2 = [4,3,2,1];
let digits3 = [9];
let result = plusOne(digits);
let result2 = plusOne(digits2);
let result3 = plusOne(digits3);
console.log(result);
console.log(result2);
console.log(result3);