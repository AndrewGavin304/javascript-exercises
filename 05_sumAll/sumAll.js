const sumAll = function(num1, num2) {
    if ((Number.isInteger(num1) && Number.isInteger(num2))){
        sum = 0
        for (i=num1; i<=num2; i++){
            sum += i;
        }
        return sum;
    }
    else{
        return "Error"
    }
};

// Do not edit below this line
module.exports = sumAll;
