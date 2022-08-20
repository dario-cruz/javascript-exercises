const palindromes = function (string) {
    let firstPass = string.replace('!','').toLocaleLowerCase();
    let secondPass = firstPass.replace(',','').replace('.','').replace(' ','');
    let modString = secondPass.split("").reverse().join("");
    if (modString === secondPass) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
