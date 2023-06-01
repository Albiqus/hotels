import { Hotel } from "../types/Hotel";


export const getSortedHotels = (hotels: Hotel[], sortingMode: string, gradationMode: string) => {
    let newHotels = hotels.slice().sort((curHotel: any, nextHotel: any) => +nextHotel[sortingMode] - +curHotel[sortingMode])

    if (gradationMode === 'по возрастанию') {
        return newHotels.reverse()
    }
    return newHotels
}