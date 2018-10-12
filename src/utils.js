export const retrieveAlcohol = cocktails => {
    let alcohol = [];
    // for(let cocktail in cocktails){
    //   alcohol = alcohol.concat(cocktails[cocktail].alcohol);
    // }
    for(let cocktail of cocktails){
      alcohol = alcohol.concat(cocktail.alcohol);
    }
    return [...new Set(alcohol)].sort();
}
  
export const retrieveIngredients = cocktails => {
    let ingredient = [];
    // for(let cocktail in cocktails) {
    //   ingredient = ingredient.concat(cocktails[cocktail].ingredients);
    // }
    for(let cocktail of cocktails) {
      ingredient = ingredient.concat(cocktail.ingredients);
    }
    return [...new Set(ingredient)].sort();
}