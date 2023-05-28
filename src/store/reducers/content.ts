import { HOTELS } from "../../data/hotels"


const startState = {
    hotels: HOTELS,
}

export const content = (state = startState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}