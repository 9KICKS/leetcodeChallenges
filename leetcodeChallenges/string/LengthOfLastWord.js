function lengthOfLastWord(s) {
    let i = s.length - 1;
    let len = 0;
    while (i >= 0 && s.charAt(i) === ' ') {
        i--;
    }
    while (i >= 0) {
        if (s.charAt(i) === ' ') {
            break;
        }
        i--;
        len++;
    }
    return len;
}

let s = "Hello World";
let t = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
console.log(lengthOfLastWord(t));