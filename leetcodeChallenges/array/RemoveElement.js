function removeElement(numbers, value) {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        if (numbers[start] !== value) {
            start++;
            continue;
        }
        if (numbers[end] === value) {
            end--;
            continue;
        }
        numbers[start] = numbers[end];
        start++;
        end--;
    }
    return numbers.slice(0, start);
}

let numbers = [3,2,2,3];
let numbers2 = [0,1,2,2,3,0,4,2];
let value = 3;
let value2 = 2;
let result = removeElement(numbers, value);
let result2 = removeElement(numbers2, value2);
console.log(result);
console.log(result2);