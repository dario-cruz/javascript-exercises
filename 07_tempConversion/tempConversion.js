const ftoc = function(inputTemp) {
  //Calc for f to c conversion.
  result = (inputTemp - 32) * .5556;
  //Math round method to the 1st decimal place. 
  resultRoundc = Math.round(result * 10) / 10;
  return resultRoundc;
};

const ctof = function(inputTemp) {
  //Calc for c to f conversion.
  result = (inputTemp * 1.8) + 32;
  //Math round method to the 1st decimal place. 
  resultRoundf = Math.round(result * 10) / 10;
  return resultRoundf;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
