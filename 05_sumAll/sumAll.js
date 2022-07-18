const sumAll = function(numOne, numTwo) {
    const numsArray =[];
    if (isNaN(numOne)) {
        return "ERROR";
    } else if (isNaN(numTwo)) {
        return "ERROR";
    } else {
        if (numOne > numTwo) {
            while (numOne >= numTwo) {
                numsArray.push(numTwo);
                numTwo++;
            }
            let result = numsArray.reduce((sum, current) => sum + current, 0);
            return result;
        } else {
            while (numOne <= numTwo) {
                numsArray.push(numOne);
                numOne++;
            }
            let result = numsArray.reduce((sum, current) => sum + current, 0);
            return result;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
