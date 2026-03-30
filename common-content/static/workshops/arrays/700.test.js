// Predict and explain...
// Below is a function countWords and a test that checks that it counts the words in a string correctly
// At the moment, it isn't working. Try to reason about what happens when the function is called.
// Check your prediction and explanation using the tests
// Fix anything that doesn't work

function countWords(text) {
    return text.split('').length;
}


test('should count the words in a string of text', () => {

    const text = "Here is a plain sentence with some information! Try to find the word count";
    expect(countWords(text)).toBe(14);

});