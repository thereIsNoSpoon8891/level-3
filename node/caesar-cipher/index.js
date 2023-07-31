const readline = require('readline-sync');

let letters = "abcdefghijklmnopqrstuvwxyz"// original letters
let newLetters = "" // stores the shifted letters

const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

let shift = parseInt(readline.question('How many letters would you like to shift? '));

function shiftLetters (shift, input){
    
    for(i = 0; i < letters.length; i++){
        let shifted = (i + shift) % letters.length; // % = returns the remainder
        // current index of i + provided shift number, modulus wraps back around the length 
        // to make sure nothing gets "cut out"//             
        newLetters += letters[shifted] 
        // builds the new set of letters based on start point of "shift"  
}
                                                

    let result = "";

    for(i = 0; i < input.length; i++){
        let index = letters.indexOf(input[i])// index of original letters
        console.log(input[i])       
        result += newLetters[index];        

        console.log(`letter added ${newLetters[index]}`)
}
                                                

    return result
}

console.log(shiftLetters(shift, input))



