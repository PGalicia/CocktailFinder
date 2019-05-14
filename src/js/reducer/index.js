import { CHANGE_GREETING } from "./../constant/actionTypes.js";

const initialState = {
    greetingMessage: "Hello World"
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_GREETING:
            return { ...state, greetingMessage: action.payload };
        default:
            return state;
    }
}

export default rootReducer;