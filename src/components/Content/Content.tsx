import { RootState } from "../../store/store";
import { getCurrentHotels } from "../../utils/getCurrentHotels";
import { DescriptionWrapper, Div, HotelItem, Mark, MarkTitle, MarkWrapper, Name, P, Price, Rating, RattingWrapper, Reviews, Span } from "./Content-styles"
import { useSelector } from 'react-redux'
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { Stars } from "./Stars/Stars";
import { useState } from "react";
import { YandexMap } from "./YandexMap/YandexMap";
import { getSortedHotels } from "../../utils/getSortedHotels";
import { getFormattedPrice } from "../../utils/getFormattedPrice";
import { getFoundedHotels } from "../../utils/getFoundedHotels";


export const Content = () => {
    let { hotels } = useSelector((state: RootState) => state.content);
    let { currentPage } = useSelector((state: RootState) => state.pages);
    let { sortingMode, gradationMode } = useSelector((state: RootState) => state.sorting);
    let { searchValue } = useSelector((state: RootState) => state.search);

    const [mapHotelId, setMapHotelId] = useState(0)
    
    const foundedHotels = getFoundedHotels(hotels, searchValue)
    const sortedHotels = getSortedHotels(foundedHotels, sortingMode, gradationMode)
    const currentHotels = getCurrentHotels(sortedHotels, currentPage)
    

    const onMarkClick = (e: any) => {
        const id = +e.currentTarget.getAttribute('id')
        setMapHotelId(id)
    }

    const onCloseLocationClick = () => {
        setMapHotelId(0)
    }

    const hotelItems = currentHotels.map((hotel: any) => {
        return (
            <HotelItem key={hotel.id} >
                {mapHotelId === hotel.id && <YandexMap latitude={hotel.latitude} longitude={hotel.longitude} onCloseClick={onCloseLocationClick} />}
                <ImageSlider id={hotel.id} />
                <DescriptionWrapper>
                    <Name>{hotel.name}</Name>
                    <Stars stars={hotel.stars} />
                    <RattingWrapper>
                        <Rating>{hotel.rating}/10</Rating>
                    </RattingWrapper>

                    <Reviews>{hotel.reviews} отзывов</Reviews>
                    <Price><Span>{getFormattedPrice(hotel.price)}</Span> р/сут</Price>
                    <MarkWrapper id={hotel.id} onClick={onMarkClick}>
                        <Mark />
                        <MarkTitle >показать на карте</MarkTitle>
                    </MarkWrapper>
                </DescriptionWrapper>
            </HotelItem>
        )
    })

    return (
        <Div>
            {hotelItems}
            {hotelItems.length === 0 && <P>отелей не найдено</P>}
        </Div>
    )
}