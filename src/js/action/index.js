import { CHANGE_GREETING } from "./../constant/actionTypes.js";

export const changeGreeting = greeting => ({
    type: CHANGE_GREETING,
    payload: greeting
});