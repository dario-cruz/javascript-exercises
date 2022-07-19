// Function checkes the arg against modulo expressions and passes it on to the logic.
// Then the output will be true or false.
const leapYears = function(inputYears) {
    if (inputYears % 4 == 0 && inputYears % 100 !== 0 || inputYears % 400 == 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
