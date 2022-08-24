const findTheOldest = function(array) {
    let ageArray = array.map((element) => {
        // Map method itierates through the array with the given function.
        // Function gets the age of the person and puts it into a resulting array.
        return element.yearOfDeath - element.yearOfBirth;
    })
    // Making use of the Math.max method to find the index of the max age. 
    let getIndex = Math.max(...ageArray);
    // Defining the value to be used for selection.
    let selectIndex = ageArray.getIndex;
    // return the selection.
    return array[selectIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
