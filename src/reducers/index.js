import { COCKTAILS } from '../constants/cocktail';
import { retrieveAlcohol, retrieveIngredients } from '../utils';
import { 
    CHECKBOXES_CHANGE,
    SELECTED_CHECKBOXES,
    UPDATE_CLOSE_COCKTAIL,
    UPDATE_POSSIBLE_COCKTAIL
} from "../constants/action-types";

const initialState = {
    cocktails: COCKTAILS,
    alcohol: retrieveAlcohol(COCKTAILS),
    ingredients: retrieveIngredients(COCKTAILS),
    closeCocktails: [],
    possibleCocktails: [],
    checkboxes: [],
    selected: [
        { category: "liquor", chosen: [] },
        { category: "ingredients", chosen: [] }
    ]
};

const rootReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case CHECKBOXES_CHANGE:
            return { ...state, checkboxes: action.payload };
        case SELECTED_CHECKBOXES:
            return { ...state, selected: action.payload };
        case UPDATE_CLOSE_COCKTAIL:
            return { ...state, closeCocktails: action.payload };
        case UPDATE_POSSIBLE_COCKTAIL:
            return { ...state, possibleCocktails: action.payload };
        default:
            return state;
    }
}
export default rootReducer;