import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Div, Input } from "./Search-styles"
import { setSearchValue } from "../../actionCreators/setSearchValue";
import { setCurrentPage } from "../../actionCreators/setCurrentPage";


export const Search = () => {

    let { searchValue } = useSelector((state: RootState) => state.search);

    const dispatch = useDispatch()

    const onSearchValueChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
        dispatch(setCurrentPage(1))
    }

    return (
        <Div>
            <Input onChange={onSearchValueChange} placeholder="поиск.." value={searchValue}/>
        </Div>
    )
}