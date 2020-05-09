import styled, {css} from "styled-components";

interface ITextareaTypes {
 
  fixed?:boolean,
  medium?:boolean,
  marginTop?:boolean,
}

export const TextArea= styled.textarea<ITextareaTypes>`
  width: ${props => props.medium ? "48%" : "95%"};
  height: 20rem;
  border-radius: 5px;
  border: 2px solid #ddd; 
  outline: none;
  padding: 1.5rem 1rem;
  font-family: 'Helvetica Neue',
    sans-serif;  
  opacity: 0.7;
  font-size: 18px;  

  &:focus {
    border: 2px solid #3393FF;
  } 
   
  @media ${props => props.theme.media.laptop} { 
    margin-top : ${props => props.marginTop ? "1rem" : "0rem"};
    font-family:'Helvetica Neue' !important;  
  }


  
`