const sumAll = function(numOne, numTwo) {
    const numsArray =[];
    while (numOne <= numTwo) {
        numsArray.push(numOne);
        numOne++;
    }
    let result = numsArray.reduce((sum, current) => sum + current, 0);
    return result;
};

// Do not edit below this line
module.exports = sumAll;
