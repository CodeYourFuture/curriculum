// Below, we have two functions which have the same aim.
// Both functions take a word as a parameter.
// If the function has been called with that word before (regardless of case), the previous version of the word is returned.
// So if you called the function with "hello", then "HELLO", the second call will return "hello".
// If the word has not been used before, it will just be returned as-is.

// One of these functions has side-effects.
// When you call it, it does something other than just returning a value based only on its parameters.
//
// The other doesn't have side effects.
// When you call it with the same arguments, it always does exactly the same thing,
// and you can see everything it does in its return value.
//
// Which function has side-effects? Which doesn't?
// Try to write tests for both functions.
// Which was easier to test? What issues did you run into writing tests?

const previousWords = [];

function getPreviousCaseOfWordOne(word) {
    for (const previousWord of previousWords) {
        if (previousWord.toLowerCase() === word.toLowerCase()) {
            return previousWord;
        }
    }
    previousWords.push(word);
    return word;
}

function getPreviousCaseOfWordTwo(word, words) {
    for (const previousWord of words) {
        if (previousWord.toLowerCase() === word.toLowerCase()) {
            return previousWord;
        }
    }
    return word;
}
