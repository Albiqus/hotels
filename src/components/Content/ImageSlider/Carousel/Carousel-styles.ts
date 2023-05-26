import styled, { keyframes } from "styled-components";
import { AllItemsProps } from "../../../../types/props/AllItemsProps";
import arrowLeft from '../../../../images/icons/arrow-left.png'
import arrowRight from '../../../../images/icons/arrow-right.png'


export const Div = styled.div`
height: 206px;
width: 275px;
display: flex;
align-items: center;
`

export const AllItems = styled.div`
height: 100%;
display: flex;
transition: translate;
transition-property: transform;
transition-duration: 400ms;
transition-timing-function: ease-in-out;
transform: ${(props: AllItemsProps) => `translateX(${props.offset}px)`};   
`

export const appearance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
      opacity: 1;
  }
`

export const ArrowLeft = styled.div`
top: 87px;
left: 10px;
z-index: 2;
position: absolute;
width: 32px;
height: 32px;
background-image: url(${arrowLeft});
background-repeat: no-repeat;
display: none;
animation: ${appearance} 1s forwards;
&:hover{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5)
}
`

export const ArrowRight = styled.div`
top: 87px;
right: 10px;
z-index: 2;
position: absolute;
width: 32px;
height: 32px;
background-image: url(${arrowRight});
background-repeat: no-repeat;
display: none;
animation: ${appearance} 1s forwards;
&:hover{
     cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5)
}
`


export const Demo = styled.div`
position: relative;
z-index: 1;
height: 100%;
width: 100%;
overflow: hidden;
&:hover ${ArrowLeft}{
   display: block;
}
&:hover ${ArrowRight}{
   display: block;
}
`