import { Div, EmptyStar, Star } from "./Stars-styles"


export const Stars = ({stars}: any) => {

    const StarItems = []

    for (let i = 1; i <= 5; i++) {
        if (i <= stars) {
            StarItems.push(<Star key={i} />)
        } else StarItems.push(<EmptyStar key={i} />)
    }

    return (
        <Div>
            {StarItems}
        </Div>
    )
}