function twoSum(numbers, target) {
    let result = new Array(2);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    return result;
}

let numbers = [2,7,11,15];
let numbers2 = [3,2,4];
let target = 9;
let target2 = 6;
let result = twoSum(numbers, target);
let result2 = twoSum(numbers2, target2);
console.log(result);
console.log(result2);