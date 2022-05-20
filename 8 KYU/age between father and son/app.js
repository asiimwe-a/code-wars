/*Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son 
(or in how many years he will be twice as old).
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  if(dadYearsOld / sonYearsOld ===2){
    return 0
  } else {
    let gap = (dadYearsOld - sonYearsOld) - sonYearsOld
    return Math.abs(gap)
  }
}

/*
ARROW FUNCTION

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2);

*/