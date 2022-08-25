const findTheOldest = function(people) {
    let ageArray = people.map((element) => {
        // Map method itierates through the array with the given function.
        // Function gets the age of the person and puts it into a resulting array.
        return element.yearOfDeath - element.yearOfBirth;
    })
    // Making use of the Math.max method to find the index of the max age. 
    let getIndex = Math.max(...ageArray);
    // Defining the value to be used for selection.
    let selectIndex = ageArray.getIndex;
    // return the selection.
    return people[selectIndex];
};

const testPeople = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

// Do not edit below this line
module.exports = findTheOldest;
