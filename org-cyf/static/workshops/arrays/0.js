// Predict and explain...
// Try predicting and explaining what will get logged to the console when the code runs
// To check your prediction, play computer using the Python Visualiser: https://pythontutor.com/render.html#mode=display


const ingredients = ["olive oil","tomatoes",'garlic','onion', 'carrot'];
let ingredientsCopy = ingredients;
ingredientsCopy.push('pasta','salt','pepper');
const otherRecipe = ["olive oil","tomatoes",'garlic','onion', 'carrot','pasta','salt','pepper'];

console.log(ingredients === ingredientsCopy);
console.log(ingredients === otherRecipe);
console.log(otherRecipe === ingredientsCopy);
console.log(otherRecipe.length === ingredients.length);