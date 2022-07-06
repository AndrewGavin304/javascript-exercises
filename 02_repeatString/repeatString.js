const repeatString = function(str, num) {
    let returnString = ""
    if (num < 0){
        returnString = "ERROR"
        return returnString;
    }
    for (let i = num; i >= 1; i--){
        returnString += str;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
