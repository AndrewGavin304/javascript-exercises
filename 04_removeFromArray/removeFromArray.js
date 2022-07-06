const removeFromArray = function(array, ...args) {
    const newArray = [];
    for (const element of array){
        if ((args.includes(element) == false)){
            newArray.push(element);
        }
    }
    console.log(newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;