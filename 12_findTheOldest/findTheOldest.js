// Setting the current date. 
// For tests where objects have no death date.
const today = new Date();
const getDate = today.getFullYear();

const findTheOldest = function(people) {
    const ageArray = people.map((element) => {
        // Map method itierates through the array with the given function.
        // Function gets the age of the person and puts it into a resulting array.
        return element.yearOfDeath - element.yearOfBirth;
    })
    console.log(ageArray);
    // Making use of the Math.max method to find the index of the max age. 
    let getIndex = Math.max(...ageArray);
    console.log(getIndex);
    // Defining the value to be used for selection.
    let selectIndex = ageArray.indexOf(getIndex);
    console.log(selectIndex);
    // return the selection.
    return people[selectIndex];
};

// Test array for troubleshooting. 
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
