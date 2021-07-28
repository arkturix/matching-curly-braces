// A function to test for matching braces in a string
export function matchingBraces(inputString) {
    let n = 0;
    for ( let i = 0; i < inputString.length; i++ ) {
        if ( inputString[i] === '{' ) n++;
        if ( inputString[i] === '}' ) {
            n--;
            if ( n < 0 ) return false;
        }
    }

    return n === 0;
}