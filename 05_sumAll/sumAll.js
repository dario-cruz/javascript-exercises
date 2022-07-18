const sumAll = function(numOne, numTwo) {
    const numsArray =[];
    //Checks if the value is NaN or a string. Uses || or Logic.    
    if (isNaN(numOne) || typeof numOne === `string`) {
        return "ERROR";
    } else if (isNaN(numTwo) || typeof numTwo === `string`) {
        return "ERROR";
        //Checks for if the value is negative or not. 
    } else if (Math.sign(numOne) == -1 || Math.sign(numTwo) == -1) {
        return "ERROR";
    } else {
        //Checks for which value is larger and runs while statement.
        //Uses the push method to add item to array and increments the value.
        if (numOne > numTwo) {
            while (numOne >= numTwo) {
                numsArray.push(numTwo);
                numTwo++;
            }
            //Reduce method on the array adds up all the items and provides a sum.
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
