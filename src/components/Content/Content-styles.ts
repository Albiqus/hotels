import styled from "styled-components";
import mark from '../../images/icons/mark.png'


export const Div = styled.div`
    width: 100%;
    height: auto;
    background-color: rgb(235, 206, 206);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 50px;
`

export const HotelItem = styled.div`
    position: relative;
    width: 800px;
    height: 206px;
    margin-top: 50px;
    background-color: rgb(240, 230, 230);;
    display: flex;
    flex-wrap: wrap;
`

export const DescriptionWrapper = styled.div`
    margin-top: 20px;
    margin-left: 20px;
`

export const Name = styled.p`
    font-size: 25px;
    font-family: custom;
    margin: 0;
`

export const RattingWrapper = styled.div`
position: absolute;
top: 20px;
right: 20px;
width: 100px;
height: 50px;
background-color: white;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`

export const Rating = styled.p`
font-size: 25px;
margin: 0;
font-family: custom;
`

export const Reviews = styled.p`
font-size: 18px;
margin: 0;
margin-top: 20px;
`

export const Price = styled.p`
position: absolute;
font-family: custom;
font-size: 20px;
right: 20px;
bottom: 20px;
margin: 0;
`

export const Span = styled.span`
font-family: custom_bold;
font-size: 25px;
`

export const MarkWrapper = styled.div`
display: flex;
margin-top: 20px;
height: 32px;
width: 190px;
&:hover{
    cursor: pointer;
}
`

export const Mark = styled.div`
height: 32px;
width: 32px;
background-image: url(${mark});
`

export const MarkTitle = styled.p`
font-family: custom;
font-size: 16px;
margin: 0;
margin-top: 10px;
margin-left: 5px;
text-decoration: underline;
`