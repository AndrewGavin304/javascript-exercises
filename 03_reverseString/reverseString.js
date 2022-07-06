const reverseString = function(str) {
    const strAsArray = str.split("");
    const reverseArray = strAsArray.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
