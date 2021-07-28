// A function to test for matching braces in a string. Used function notation instead of arrow function for compatibility with jest test framework on my local machine.
export function matchingBraces(inputString) {
    let n = 0;  // Variable for checking existence of unclosed brackets
    // Loop over all characters in the string
    for ( let i = 0; i < inputString.length; i++ ) {
        if ( inputString[i] === '{' ) n++;  // Increase value for opening bracket
        if ( inputString[i] === '}' ) {
            n--;  // Decrease value for closing bracket
            if ( n < 0 ) return false;  // Return false when encountering a closing bracket that has no matching opening
        }
    }

    return n === 0;  // Return boolean of unmatched opening brackets
}