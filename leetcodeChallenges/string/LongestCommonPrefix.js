function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return '';
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (j === strs[i].length || prefix.charAt(j) !== strs[i].charAt(j)) {
                prefix = prefix.substring(0, j);
                break;
            }
        }
    }
    return prefix;
}

let strs = ["flower","flow","flight"];
let strs2 = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));