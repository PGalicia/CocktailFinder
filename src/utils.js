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
