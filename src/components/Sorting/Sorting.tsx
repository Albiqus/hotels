import { useDispatch, useSelector } from "react-redux"
import { setSortingMode } from "../../actionCreators/setSortingMode"
import { Div, Gradation, GradationText, P, Popularity, Price, Rating, Stars, Wrapper } from "./Sorting-styles"
import { RootState } from "../../store/store"


export const Sorting = () => {

    const dispatch = useDispatch()

    let { sortingMode } = useSelector((state: RootState) => state.sorting);

    const onSortingClick = (e: any) => {
        const id = e.currentTarget.getAttribute('id')
        dispatch(setSortingMode(id))
    }

    return (
        <Div>
            <Wrapper>
                <Popularity sortingMode={sortingMode} id='popularity' onClick={onSortingClick}>
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
            <Gradation>по убыванию</Gradation>
        </Div>
    )
}