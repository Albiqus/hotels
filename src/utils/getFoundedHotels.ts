import { Hotel } from "../types/Hotel";


export const getFoundedHotels = (hotels: Hotel[], searchValue: string) => {
    return hotels.filter((hotel: Hotel) => {
        return hotel.name.toLowerCase().split(' ').some(string => string.startsWith(searchValue.toLowerCase()))
    })
}