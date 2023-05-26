import styled from "styled-components";
import star from '../../../images/icons/star.png'
import emptyStar from '../../../images/icons/empty-star.png'


export const Div = styled.div`
margin-top: 10px;
width: 500px;
height: 32px;
display: flex;
`

export const Star = styled.div`
width: 32px;
height: 32px;
margin-right: 5px;
background-image: url(${star});
`

export const EmptyStar = styled.div`
width: 32px;
height: 32px;
margin-right: 5px;
background-image: url(${emptyStar})
`