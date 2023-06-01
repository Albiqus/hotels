import styled from "styled-components";
import { PageItemProps } from "../../types/props/PageItemProps";


export const Div = styled.div`
    width:320px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
width: 320px;
height: 32px;
display: flex;
justify-content: center;
`

export const PageItem = styled.div`
margin: 0px 5px 0px 5px;
width: 32px;
height: 32px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
user-select: none;
border-radius: 5px;
outline:  ${(props: PageItemProps) => props.currentPage === props.pageId ? '2px solid rgba(0,0,0,0.4)' : 'none'};
&:hover{
    cursor: pointer;
    background-color: rgba(0,0,0,0.2)
}
`

export const ArrowLeft = styled.div`
margin-right: 10px;
width: 0;
height: 0;
border-style: solid;
border-width: 16px 32px 16px 0;
border-color: transparent white transparent transparent;
&:hover{
    cursor: pointer;
       border-color:  transparent  rgba(0,0,0,0.2) transparent transparent
}
`

export const ArrowRight = styled.div`
margin-left: 10px;
width: 0;
height: 0;
border-style: solid;
border-width: 16px 0 16px 32px;
border-color: transparent transparent transparent #ffffff;
&:hover{
    cursor: pointer;
    border-color:  transparent transparent transparent rgba(0,0,0,0.2)
}
`

export const P = styled.p`
margin: 0;
font-size: 18px;
font-family: custom_bold;
`