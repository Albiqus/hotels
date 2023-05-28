import {  SET_SORTING_MODE } from "../../data/actionTypes";


const startState = {
    sortingMode: 1,
}


export const sorting = (state = startState, action: any) => {
    switch (action.type) {
        case SET_SORTING_MODE: {
            return {
                ...state,
                sortingMode: action.payload
            }
        }
        default:
            return state;
    }
}

