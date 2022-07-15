const repeatString = function(string, num) {
    if (num < 0) {
        let errorString = 'ERROR';
        return errorString;
        
    } else {
        let processedString = string.repeat(num);
        return processedString;
    }
    // Var for output string. 
};

// Do not edit below this line
module.exports = repeatString;
