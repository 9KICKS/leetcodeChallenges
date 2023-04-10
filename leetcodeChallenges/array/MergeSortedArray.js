function merge(numbers1, m, numbers2, n) {
    m--;
    n--;
    for (let i = m + n + 1; i >= 0; i--) {
        let a = m >= 0 ? numbers1[m] : - Infinity;
        let b = n >= 0 ? numbers2[n] : - Infinity;
        if (a > b) {
            numbers1[i] = a;
            m--;
        } else {
            numbers1[i] = b;
            n--;
        }
    }
}

let numbers1 = [1,2,3,0,0,0];
let m = 3;
let numbers2 = [2,5,6];
let n = 3;
merge(numbers1, m, numbers2, n);
console.log(numbers1);

let numbers3 = [1];
let x = 1;
let numbers4 = [];
let y = 0;
merge(numbers3, x, numbers4, y);
console.log(numbers3);