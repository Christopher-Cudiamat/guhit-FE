import styled, {css} from "styled-components";


interface IFormTypes { 
  
}


export const Container = styled.div<IFormTypes>`
  padding:0rem 1rem 20rem 1rem;
  @media ${props => props.theme.media.laptop} { 
    max-width: 1080px;
    margin: auto;
  }

  & h2:first-child {
    color:${props => props.theme.color.gray};
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

export const Div = styled.div<IFormTypes>`
  margin: auto;
  width:90%; 
  @media ${props => props.theme.media.laptop} { 
    width:35%; 
  }
`


export const FormControl = styled.form<IFormTypes>`
      margin:auto;
      text-align: center;
      position: relative;
      width: 100%;

      & p:first-child {
        margin-top: 4rem;
        margin-bottom: 2rem;
        /* @media ${props => props.theme.media.laptop} { 
          text-align: left;
        } */
      }

      & div {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      & button {
        width:80%;
        @media ${props => props.theme.media.laptop} { 
          width:45%; 
        }
      }
    
`