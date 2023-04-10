function searchInsert(numbers, target) {
    return binarySearch(numbers, 0, numbers.length - 1, target)
}

function binarySearch(numbers, start, end, target) {
    if (start > end) {
        return end + 1;
    }
    let middle = Math.floor((start + end) / 2);
    if (numbers[middle] < target) {
        return binarySearch(numbers, middle + 1, end, target);
    }
    if (numbers[middle] > target) {
        return binarySearch(numbers, start, middle - 1, target);
    }
    return middle;
}

let numbers = [1,3,5,6];
let target = 5;
let numbers2 = [1,3,5,6];
let target2 = 2;
let result = searchInsert(numbers, target);
let result2 = searchInsert(numbers2, target2);
console.log(result);
console.log(result2);