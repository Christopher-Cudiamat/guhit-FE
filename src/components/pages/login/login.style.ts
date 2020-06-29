import styled, {css} from "styled-components";


interface IFormTypes { 
  social?:boolean,
  inputContainer?: boolean,
  main?: boolean,
  loginOptions?: boolean,
  loginFb?: boolean,
  signUp?: boolean,
  socialContainer?: boolean,
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
  text-align:center;
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
          line-height: 2.4rem;
          font-size: 1.6rem;
          /* font-weight: bold; */
          color: 
          ${props => props.signUp ? props.theme.color.secondary : props.theme.color.primary };
          padding: 0rem .6rem;
        }
      `
  };

  ${({socialContainer}) => socialContainer &&
    css`
      position: relative;
  
     
      & > button {
        width: 100%;
        margin-bottom: 2rem;
        
      }`
  };
  `

export const Form = styled.form<IFormTypes>`

  & h2:first-child {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  & > a {
    margin: 0rem 0rem 2rem 0rem;
  }

  & input {
    margin: 0rem 0rem 1.5rem 0rem;
  }

  & > button {
    width: 85%;
    margin: 2rem 0rem 2rem 0rem;
    
  }
 


`


