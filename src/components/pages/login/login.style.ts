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
  margin: auto; 

  @media ${props => props.theme.media.tablet} { 
    max-width: 40rem;
  }

  @media ${props => props.theme.media.laptop} { 
    position: relative;
    max-width: 90rem;
    display: flex;
    padding: 9rem 0rem 14rem 0rem;
    div:nth-child(1) { order: 2; width: 40%;}
    img:nth-child(2) { order: 1; }
  }

  & img{
    @media ${props => props.theme.media.laptop} { 
      width: auto;
      height: 45vh;
      padding-left: 3rem;
    }
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
      @media ${props => props.theme.media.laptop} { 
        margin-top: 0rem;
      }
    `
  };


  ${({loginOptions}) => loginOptions &&
    css`
      margin-bottom: 3rem;
      color: ${props => props.theme.color.gray};

      & span {
        line-height: 2.4rem;
        font-size: 1.6rem;
        color: ${props => props.signUp ? props.theme.color.secondary : props.theme.color.primary };
        padding: 0rem .6rem;

        & a:hover {
          font-weight: 600;
        }
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


