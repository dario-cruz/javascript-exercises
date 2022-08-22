const fibonacci = function(num) {
    if (Math.sign(num)== -0 || Math.sign(num)== -1) {
        return "OOPS";
    } else{
        // Pass value to fib formula.
        resultVal = (((1 + Math.sqrt(5)) ** num) - ((1 - Math.sqrt(5)) ** num)) / ((2 ** num) * Math.sqrt(5));
        // Rounds the output to whole num.
        resultRnd = Math.round(resultVal);
    }
    // Return rounded result.
    return resultRnd;
};

// Do not edit below this line
module.exports = fibonacci;
