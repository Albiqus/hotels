import { SET_CURRENT_PAGE } from "../../data/actionTypes";


const startState = {
    currentPage: 1,
}


export const pages = (state = startState, action: any) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        default:
            return state;
    }
}

