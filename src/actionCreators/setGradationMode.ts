import { SET_GRADATION_MODE } from "../data/actionTypes"


export const setGradationMode = (mode: string) => {
    return {
        type: SET_GRADATION_MODE,
        payload: mode
    }
}