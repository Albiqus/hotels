import {  SET_GRADATION_MODE, SET_SORTING_MODE } from "../../data/actionTypes";


const startState = {
    sortingMode: 'reviews',
    gradationMode: 'по убыванию', 
}


export const sorting = (state = startState, action: any) => {
    switch (action.type) {
        case SET_SORTING_MODE: {
            return {
                ...state,
                sortingMode: action.payload
            
            }
        }
        case SET_GRADATION_MODE: {
            return {
                ...state,
                gradationMode: action.payload

            }
        } 
        default:
            return state;
    }
}

