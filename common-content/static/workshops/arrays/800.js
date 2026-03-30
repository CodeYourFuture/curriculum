// Predict and explain...
// We've seen for..of loops used for arrays.
// Below we try to use it with a variable which isn't an array.
// What do you think will get logged?
// Don't run the code until you've predicted and explained the whole file.
// Then check your prediction and explanation by running the code

const sentence = "I really enjoy ice cream";

for (const part of sentence) {
    console.log(part);
}

// What's the difference between what was written above, and what's below?
// How will they behave differently?

const parts = sentence.split(" ");

for (const part of parts) {
    console.log(part);
}
