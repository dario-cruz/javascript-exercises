const ftoc = function(inputTemp) {
  result = (inputTemp - 32) * .5556;
  Math.round(result);
  return result;
};

const ctof = function(inputTemp) {
  result = (inputTemp * 1.8) + 32;
  Math.round(result);
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
