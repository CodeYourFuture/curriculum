// the head of an array is the first element of an array
// the tail of an array is the last element of an array


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getHead(arr) {
    return arr.shift();   
};

function getTail(arr) {
    return arr.pop();
};

console.log(`The first letter of the alphabet is ${getHead(alphabet)}`);
console.log(`The last letter of the alphabet is ${getTail(alphabet)}`);
console.log(alphabet.length);
// Explain why alphabet length is now 24
// How could we change the functions we defined to return the same values, but not change the length of alphabet?
