import { SET_SORTING_MODE } from "../data/actionTypes"


export const setSortingMode = (mode: string) => {
    return {
        type: SET_SORTING_MODE,
        payload: mode
    }
}