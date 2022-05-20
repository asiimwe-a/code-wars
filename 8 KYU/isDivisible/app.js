/*
Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false
*/

function isDivideBy(number, a, b) {
    // good luck
    if(number%a===0 && number%b===0){
      return true
    } else return false
  }
  
  /*
  ONE LINE ARROW FUNCTION
  const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
  
  USING EVERY (method)
  function isDivideBy(number, a, b) {
    return [a, b].every(i => number % i === 0)
  }
  
  */