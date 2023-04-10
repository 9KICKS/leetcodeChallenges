function singleNumber(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = result ^ array[i];
    }
    return result;
}

let array = [2,2,1];
let result = singleNumber(array);
let array2 = [4,1,2,1,2];
let result2 = singleNumber(array2);
console.log(result);
console.log(result2);