const reverseString = function(textString) {
    let textArray = textString.split("");
    let textArrayRev = textArray.reverse();
    let textReverse = textArrayRev.join("");
    return textReverse;
};

// Do not edit below this line
module.exports = reverseString;
