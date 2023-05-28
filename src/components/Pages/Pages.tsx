import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft, ArrowRight, Div, P, PageItem, Wrapper } from "./Pages-styles"
import { RootState } from "../../store/store";
import { setCurrentPage } from "../../actionCreators/setCurrentPage";


export const Pages = () => {

    const dispatch = useDispatch()
    
    let { currentPage } = useSelector((state: RootState) => state.pages);

    const pages = []
    for (let i = 1; i <= 5; i++) {
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
        if (currentPage === 5) return
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
                <ArrowLeft onClick={onPrevPageClick} />
                {pageItems}
                <ArrowRight onClick={onNextPageClick} />
            </Wrapper>
        </Div>
    )
}