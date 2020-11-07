import styled, {css} from "styled-components";

interface IStyleTypes {
  chaptersList?:boolean,
  titleContainer?:boolean,
  noResult?:boolean,
}


export const Div = styled.div<IStyleTypes>`


  ${({noResult}) => noResult && 
    css`
    margin-top: 15rem;
    margin-bottom: 20rem;
    text-align: center;
    & h3 {
      color:  ${props => props.theme.color.gray};
    }
     
  `}; 

  ${({titleContainer}) => titleContainer && 
  css`
    background: ${props => props.theme.color.white};
    margin: 3rem 0rem 3rem 0rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0rem 1rem;
      
    & h2 {
      margin-bottom: .5rem;
    }
  `}; 

`
