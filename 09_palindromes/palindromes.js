const palindromes = (str) => {
    const lowerStr = str.toLowerCase();
    const charArray = lowerStr.split('');
    const arrayNoSymbols = [];
    for (const char of charArray){
        if (char.match(/[a-z]/i)) {
            arrayNoSymbols.push(char)
        }
    }
    const reversedArrayNoSymbols = arrayNoSymbols.slice().reverse()
    if (reversedArrayNoSymbols.toString() === arrayNoSymbols.toString()){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
