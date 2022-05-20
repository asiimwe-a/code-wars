// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// function find_average(array) {
//     let total=0
//     for(let i=0;i<array.length;i++){
//       total += array[i]
//   }
//     if(total===0){
//       return 0
//   } else {
//      return (total/array.length);
//       }
   
//   }

var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }