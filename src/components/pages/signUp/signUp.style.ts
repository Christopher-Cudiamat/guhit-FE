import styled, {css} from "styled-components";


interface IFormTypes { 
  social?:boolean,
  inputContainer?: boolean,
  main?: boolean,
  loginOptions?: boolean,
  loginFb?: boolean,
  signUp?: boolean,
}


export const Container = styled.div<IFormTypes>`
  text-align:center; 
  @media ${props => props.theme.media.laptop} { 
    position:relative;
    max-width: 50rem;
    margin:auto;
  }
` 

export const Div = styled.div<IFormTypes>` 

  ${({main}) => main &&
    css`
      width: 90%;
      text-align: center;
      margin: auto;
      margin-top: 6rem;
    `
  };


  ${({loginOptions}) => loginOptions &&
    css`
      margin-bottom: 3rem;
      color: ${props => props.theme.color.gray};
      & span {
        font-size: 1.6rem;
        font-weight: bold;
        color: 
        ${props => props.signUp ? props.theme.color.secondary : props.theme.color.primary };
        padding: 0rem .6rem;
      }
    `
  };

 
`

export const Form = styled.form<IFormTypes>`
 
  & h2:first-child {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  & div:nth-child(3) > button {
    width: 85%;
    margin-bottom: 2rem;
  }
`


