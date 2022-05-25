// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    let newNum = (num.toString()).split('')
    let newNumArr = newNum.map((n) => {
        return n * n;
    })
    let final = parseInt(newNumArr.join(''))
    return final;
}

//   function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }