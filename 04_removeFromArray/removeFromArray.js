//Function makes use of rest parameters. 
//Rest parameters allow for indefinate ammounts of args in a functon.
//Args in a rest param get stored as an array, so you can use array methods on them.

//function takes the first arg which is an array and filters it with the rest param.
//Filter points to an arrow function that filers all items not in the "inputNum" array.

const removeFromArray = function(inputArray, ...inputNum) {
    result = inputArray.filter(items => !inputNum.includes(items));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
