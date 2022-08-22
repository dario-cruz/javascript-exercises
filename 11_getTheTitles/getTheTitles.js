const getTheTitles = function(books) {
    // Returns the array of titles from the objects.
    return books.map(function(element) {
        return element.title;
    })
};

// Do not edit below this line
module.exports = getTheTitles;
