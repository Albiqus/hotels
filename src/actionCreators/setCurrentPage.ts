import { SET_CURRENT_PAGE } from "../data/actionTypes"


export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload:  currentPage 
    }
}