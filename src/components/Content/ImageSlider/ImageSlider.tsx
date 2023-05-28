import { PHOTOS } from "../../../data/photos"
import { ImagesItemsProps } from "../../../types/props/ImagesSliderProps"
import { Carousel } from "./Carousel/Carousel"
import { FirIMG, IMG, SecIMG, ThrIMG } from "./ImageSlider-styles"


export const ImageSlider = ({ id }: ImagesItemsProps) => {

    return (
        <Carousel>
            <FirIMG><IMG src={PHOTOS[id][0]}></IMG></FirIMG>
            <SecIMG><IMG src={PHOTOS[id][1]}></IMG></SecIMG>
            <ThrIMG><IMG src={PHOTOS[id][2]}></IMG></ThrIMG>
        </Carousel>
    )
}