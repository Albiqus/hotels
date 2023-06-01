import { SET_SEARCH_VALUE } from "../../data/actionTypes";


const startState = {
    searchValue: '',
}


export const search = (state = startState, action: any) => {
    switch (action.type) {
        case SET_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.payload

            }
        }
        default:
            return state;
    }
}

