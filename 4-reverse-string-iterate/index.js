//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it by iterating through the string, character by character.
Input: string
Output: reverse string character by character
Usage: reverse string iterate
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()

function reverseWithFullIteration(str) {
    let result = '';
    // TODO loop from end of str (str.length-1) to beginning
    for (let i = str.length-1; i>=0; i--) {
        result += str[i];
        
        // TODO add the letter in the current position to the result string.
    }
    return result;
}

function reverseWithHalfIteration(str) {
    
    
}

//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input ) {
    console.log("usage: node 4-reverse-string-iterate <string>");
 }
else {
    // use functions to reverse string
    console.log("result with full iteration", reverseWithFullIteration(input));

   

}




