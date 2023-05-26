import { ImagesItemsProps } from "../../../types/props/ImagesSliderProps"
import { Carousel } from "./Carousel/Carousel"
import { FirIMG, IMG, SecIMG, ThrIMG } from "./ImageSlider-styles"


export const ImageSlider = ({ photos }: ImagesItemsProps) => {

    return (
        <Carousel>
            <FirIMG><IMG src={photos![0]}></IMG></FirIMG>
            <SecIMG><IMG src={photos![1]}></IMG></SecIMG>
            <ThrIMG><IMG src={photos![2]}></IMG></ThrIMG>
        </Carousel>
    )
}