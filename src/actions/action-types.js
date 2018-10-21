export const handleCheckboxes = checkboxes => ({
    type: "CHECKBOXES_CHANGE",
    payload: checkboxes
});

export const selectedCheckboxes = selected => ({
    type: "SELECTED_CHECKBOXES",
    payload: selected
});

export const updateCloseCocktails = chosen => ({
    type: "UPDATE_CLOSE_COCKTAIL",
    payload: chosen
});

export const updatePossibleCocktails = chosen => ({
    type: "UPDATE_POSSIBLE_COCKTAIL",
    payload: chosen
});