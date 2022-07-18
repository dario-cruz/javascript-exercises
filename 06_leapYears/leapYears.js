const leapYears = function(inputYears) {
    if (inputYears % 4 == 0 && inputYears % 100 !== 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
