import { Content } from "./Content/Content"
import { Div } from "./Main-styles"
import { Pages } from "./Pages/Pages"
import { Sorting } from "./Sorting/Sorting"


export const Main = () => {


    return (
        <Div>
            <Sorting />
            <Pages />
            <Content />
            <Pages/>
        </Div>
    )
}