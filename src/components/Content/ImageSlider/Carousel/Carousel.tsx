import { useEffect, useState, Children, cloneElement } from "react"
import { AllItems, ArrowLeft, ArrowRight, Demo, Div } from "./Carousel-styles"


export const Carousel = ({ children }: any) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setPages(
            Children.map(children, (child: any) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                    }
                })
            })
        )
    }, [])

    const onLeftArrowClick = () => {
        if (offset !== 0) {
            setOffset(offset + 275)
        }
    }

    const onRightArrowClick = () => {
        if (offset !== -550) {
            setOffset(offset - 275)
        }
    }

    return (
        <Div>

            <Demo>
                <ArrowLeft onClick={onLeftArrowClick} />
                <AllItems offset={offset}>{pages}</AllItems>
                <ArrowRight onClick={onRightArrowClick} />
            </Demo>
        </Div>
    )
}