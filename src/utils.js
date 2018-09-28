export const retrieveAlcohol = cocktails => {
    let alcohol = [];
    for(let cocktail in cocktails){
      alcohol = alcohol.concat(cocktails[cocktail].alcohol);
    }
    return [...new Set(alcohol)].sort();
}
  
export const retrieveIngredients = cocktails => {
    let ingredient = [];
    for(let cocktail in cocktails) {
      ingredient = ingredient.concat(cocktails[cocktail].ingredients);
    }
    return [...new Set(ingredient)].sort();
}