phi = (Math.sqrt(5) + 1) / 2;
phiminus = (Math.sqrt(5) - 1) / 2;
const fibonacci = function(num) {
    calRaw = ((phi ** num) - (phiminus ** num) / Math.sqrt(5));
    calRes = Math.round(calRaw);
};

// Do not edit below this line
module.exports = fibonacci;
