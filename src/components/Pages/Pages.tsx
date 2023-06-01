import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft, ArrowRight, Div, P, PageItem, Wrapper } from "./Pages-styles"
import { RootState } from "../../store/store";
import { setCurrentPage } from "../../actionCreators/setCurrentPage";
import { getFoundedHotels } from "../../utils/getFoundedHotels";


export const Pages = () => {

    const dispatch = useDispatch()

    let { currentPage } = useSelector((state: RootState) => state.pages);
    let { searchValue } = useSelector((state: RootState) => state.search);
    let { hotels } = useSelector((state: RootState) => state.content);

    const foundedHotels = getFoundedHotels(hotels, searchValue)
    const pagesCount = Math.ceil(foundedHotels.length / 10)


    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push({ id: i })
    }


    const onPageClick = (e: any) => {
        const id = +e.currentTarget.getAttribute('id')
        dispatch(setCurrentPage(id))
    }

    const onPrevPageClick = () => {
        if (currentPage === 1) return
        dispatch(setCurrentPage(currentPage - 1))
    }

    const onNextPageClick = () => {
        if (currentPage === pagesCount) return
        dispatch(setCurrentPage(currentPage + 1))
    }

    const pageItems = pages.map((page: any) => {
        return (
            <PageItem id={page.id} onClick={onPageClick} currentPage={currentPage} pageId={page.id} key={page.id}>
                <P>{page.id}</P>
            </PageItem>
        )
    })
  
    return (
        <Div>
            <Wrapper>
                {pagesCount > 0 && <ArrowLeft onClick={onPrevPageClick} />}
                {pageItems}
                {pagesCount > 0 && <ArrowRight onClick={onNextPageClick} />}
            </Wrapper>
        </Div>
    )
}