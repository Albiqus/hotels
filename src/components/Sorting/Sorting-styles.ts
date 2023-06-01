import styled from "styled-components";
import { SortingModeProps } from "../../types/props/SortingModeProps";


export const Div = styled.div`
    width: 500px;
    height: 100px;
    background-color: rgb(235, 206, 206);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
height: 40px;
width: 450px;
`

export const Popularity = styled.div`
width: 130px;
height: 40px;
background-color: ${(props: SortingModeProps) => props.sortingMode === 'reviews' ? '#3695d5;' : 'white'};
color: ${(props: SortingModeProps) => props.sortingMode === 'reviews' ? 'white' : 'black'};
display: flex;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
}
`

export const Rating = styled.div`
width: 90px;
height: 40px;
background-color: ${(props: SortingModeProps) => props.sortingMode === 'rating' ? '#3695d5;' : 'white'};
color: ${(props: SortingModeProps) => props.sortingMode === 'rating' ? 'white' : 'black'};
display: flex;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
}
`

export const Stars = styled.div`
width: 90px;
height: 40px;
background-color: ${(props: SortingModeProps) => props.sortingMode === 'stars' ? '#3695d5;' : 'white'};
color: ${(props: SortingModeProps) => props.sortingMode === 'stars' ? 'white' : 'black'};
display: flex;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
}
`

export const Price = styled.div`
width: 90px;
height: 40px;
background-color: ${(props: SortingModeProps) => props.sortingMode === 'price' ? '#3695d5;' : 'white'};
color: ${(props: SortingModeProps) => props.sortingMode === 'price' ? 'white' : 'black'};
display: flex;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
}
`

export const P = styled.p`
margin: 0;
font-family: custom;
user-select: none;
`

export const GradationText = styled.p`
position: absolute;
margin: 0;
font-family: custom;
bottom: -10px;
left: 30px;
user-select: none;
`

export const Gradation = styled.span`
position: absolute;
margin: 0;
font-family: custom;
bottom: -10px;
left: 140px;
text-decoration: underline;
user-select: none;
&:hover{
    cursor: pointer;
}
`
