const removeFromArray = function(inputArray, ...inputNum) {
    result = inputArray.filter(items => !inputNum.includes(items));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
