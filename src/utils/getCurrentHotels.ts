import { Hotel } from "../types/Hotel";


export const getCurrentHotels = (hotels: Hotel[], curPage: number) => {
    const startIndex = +`${curPage - 1}0`
    const endIndex = +`${curPage}0`

    return hotels.filter((el: Hotel, index: number) => index >= startIndex && index < endIndex)
}