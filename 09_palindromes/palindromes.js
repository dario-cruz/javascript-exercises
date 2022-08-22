const palindromes = function (string) {
    let firstPass = string.replace('!','').toLocaleLowerCase();
    console.log(firstPass);
    let secondPass = firstPass.replaceAll(',','').replaceAll('.','').replaceAll(' ','');
    console.log(secondPass);
    let modString = secondPass.split("").reverse().join("");
    console.log(modString);
    if (modString === secondPass) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
