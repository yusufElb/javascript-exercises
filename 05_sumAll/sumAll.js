const sumAll = function(intOne, intTwo) {
  if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) return "ERROR";
  if (intOne < 0 || intTwo < 0) return "ERROR";
  
  if (intOne > intTwo) {
    const temp = intOne;
    intOne = intTwo;
    intTwo = temp;
  }

  let result = 0
    for(let i = intOne; i < intTwo + 1; i++){
      result+=i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
