import { 
    CHECKBOXES_CHANGE,
    SELECTED_CHECKBOXES,
    UPDATE_CLOSE_COCKTAIL,
    UPDATE_POSSIBLE_COCKTAIL,
    CLOSE_GREETING_MESSAGE,
    OPEN_GREETING_MESSAGE,
    RESET
} from "../constants/action-types";

export const reset = () => ({
    type: RESET,
    payload: null
});

export const closeGreetingMessage = () => ({
    type: CLOSE_GREETING_MESSAGE,
    payload: null
});

export const openGreetingMessage = () => ({
    type: OPEN_GREETING_MESSAGE,
    payload: null
});

export const handleCheckboxes = checkboxes => ({
    type: CHECKBOXES_CHANGE,
    payload: checkboxes
});

export const selectedCheckboxes = selected => ({
    type: SELECTED_CHECKBOXES,
    payload: selected
});

export const updateCloseCocktails = chosen => ({
    type: UPDATE_CLOSE_COCKTAIL,
    payload: chosen
});

export const updatePossibleCocktails = chosen => ({
    type: UPDATE_POSSIBLE_COCKTAIL,
    payload: chosen
});