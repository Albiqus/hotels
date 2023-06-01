import { Content } from "./Content/Content"
import { Div } from "./Main-styles"
import { Pages } from "./Pages/Pages"
import { Search } from "./Search/Search"
import { Sorting } from "./Sorting/Sorting"


export const Main = () => {


    return (
        <Div>
            <Sorting />
            <Pages />
            <Search></Search>
            <Content />
            <Pages/>
        </Div>
    )
}