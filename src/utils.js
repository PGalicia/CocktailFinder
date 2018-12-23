export const retrieveAlcohol = cocktails => {
    let alcohol = [];
    for(let cocktail of cocktails){
      alcohol = alcohol.concat(cocktail.alcohol);
    }
    return [...new Set(alcohol)].sort();
}
  
export const retrieveIngredients = cocktails => {
    let ingredient = [];
    for(let cocktail of cocktails) {
      ingredient = ingredient.concat(cocktail.ingredients);
    }
    return [...new Set(ingredient)].sort();
}

export const calculateChunks = (arr, col) => {
  let result = [];
  let index = 0;
  let x = 0;
  let y = null;

  for (let i = 1; i <= col; i++) {
    result.push([]);
  }

  while (x < arr.length) {
    y = x + 1;
    result[index].push(arr.slice(x, y)[0]);
    index = (index + 1) % result.length;
    x += 1;
  }

  return result;
}