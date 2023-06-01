import { SET_SEARCH_VALUE } from "../data/actionTypes"


export const setSearchValue = (value: string) => {
    return {
        type: SET_SEARCH_VALUE,
        payload: value
    }
}