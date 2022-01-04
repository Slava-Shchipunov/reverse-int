module.exports = function reverse (n) {

    if (n < 0) {
        n = -n;
    };

    let str = String(n);
    let array = str.split("");
    let reverseArray = array.reverse();
    let reverseStr = reverseArray.join("");
    return Number(reverseStr);
}
