import { useDispatch, useSelector } from "react-redux"
import { setSortingMode } from "../../actionCreators/setSortingMode"
import { Div, Gradation, GradationText, P, Popularity, Price, Rating, Stars, Wrapper } from "./Sorting-styles"
import { RootState } from "../../store/store"
import { setGradationMode } from "../../actionCreators/setGradationMode"
import { setCurrentPage } from "../../actionCreators/setCurrentPage"


export const Sorting = () => {

    const dispatch = useDispatch()

    let { sortingMode, gradationMode } = useSelector((state: RootState) => state.sorting);

    const onSortingClick = (e: any) => {
        const id = e.currentTarget.getAttribute('id')
        dispatch(setSortingMode(id))
        dispatch(setCurrentPage(1))
    }

    const onGradationClick = () => {
        if (gradationMode === 'по возрастанию') {
            dispatch(setGradationMode('по убыванию'))
        } else {
            dispatch(setGradationMode('по возрастанию'))
        }
        dispatch(setCurrentPage(1))
    }

    return (
        <Div>
            <Wrapper>
                <Popularity sortingMode={sortingMode} id='reviews' onClick={onSortingClick}>
                    <P>Популярность</P>
                </Popularity>
                <Rating sortingMode={sortingMode} id='rating' onClick={onSortingClick}>
                    <P>Рейтинг</P>
                </Rating>
                <Stars sortingMode={sortingMode} id='stars' onClick={onSortingClick}>
                    <P>Звёзды</P>
                </Stars>
                <Price sortingMode={sortingMode} id='price' onClick={onSortingClick}>
                    <P>Цена</P>
                </Price>
            </Wrapper>
            <GradationText>Сортировка</GradationText>
            <Gradation onClick={onGradationClick}>{gradationMode}</Gradation>
        </Div>
    )
}