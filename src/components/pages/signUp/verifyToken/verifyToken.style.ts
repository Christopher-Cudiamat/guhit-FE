import styled, {css} from "styled-components";


interface IFormTypes { 
 

}


export const Div = styled.div<IFormTypes>` 

  width: 80%;
  height: 60vh;
  text-align:center;
  margin: auto;
  padding:2rem 0rem 4rem 0rem;
  @media ${props => props.theme.media.laptop} { 
    max-width: 50rem;
    height: 50vh;
    padding:8rem 0rem 4rem 0rem;
  }
`

export const Form = styled.form<IFormTypes>`

  & h2:first-child {
    margin-top: 3rem;
    margin-bottom: 4rem;
    text-align: left;
  }

  & input {
    margin: 0rem 0rem 2rem 0rem;
  }

  & > button {
    width: 85%;
    margin-bottom: 2rem;
    
  }
 


`


