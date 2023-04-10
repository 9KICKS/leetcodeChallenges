function removeDuplicates(array) {
    if (array.length === 0) {
        return 0;
    }
    let current = array[0];
    let fill = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== current) {
            current = array[i];
            array[fill] = current;
            fill++;
        }
    }
    return array.slice(0, fill);
}

let array = [1,1,2];
let array2 = [0,0,1,1,1,2,2,3,3,4];
let result = removeDuplicates(array);
let result2 = removeDuplicates(array2);
console.log(result);
console.log(result2);