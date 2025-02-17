const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numArray) {
  // Working version with reduce method applied.
  // Function defined for the reduce mehod to use on each array item.
  const reducerFunc = (sum, val) => sum + val;
  // Initial value to start with. 
  const total = 0;
  return numArray.reduce(reducerFunc, total);

  // Working non-reduce method example.
  // let total = 0;
  // for (const num of numArray) {
  //   total += num;
  // }
  // return total;
};

const multiply = function(multiNums) {
  return multiNums.reduce((accum, current) => accum*current,1);
};

const power = function(numOne, numTwo) {
  return numOne ** numTwo;
};

const factorial = function(numArg) {
  let result = numArg
	if (numArg == 1 || numArg == 0)
    return 1;
  while (numArg > 1) {
    numArg--;
    result *= numArg;    
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
