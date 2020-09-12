import styled, {css} from "styled-components";

interface IFilterByTextType {
  inputBox?:boolean
}


export const Div = styled.div<IFilterByTextType>`
  width:80rem;
  margin: auto;
  
  ${({inputBox}) => inputBox && 
    css`
      max-width: 90%; 
      padding: 4rem 2rem 0rem 2rem;

      @media ${props => props.theme.media.laptop} { 
        max-width: 40rem;       
      }
  `}; 

`


      


