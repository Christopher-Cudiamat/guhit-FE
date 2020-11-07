import styled, {css} from "styled-components";


interface IFormTypes { 
  loginOptions?: boolean,
  socialContainer?: boolean,
  signUp?: boolean,
}


export const Div = styled.div<IFormTypes>` 
  text-align:center;
 
  ${({socialContainer}) => socialContainer &&
    css`
      position: relative;

      /* & svg {
        position:absolute,
        right:5%,
        top:0%
      } */

      & > button {
        /* width: 100%; */
        width: 20.5rem;
        height: 4.6rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
        border-radius: 0px;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
        @media ${props => props.theme.media.tablet} { 
          width: 22.473rem;
          height: 5.2rem;
        }
        @media ${props => props.theme.media.tablet} { 
          width: 25.569rem;
          height: 6.132rem;
          font-size: 1.7rem;
        }
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
      cursor: pointer;
      font-weight: 600;
      color: 
      ${props => props.signUp ? props.theme.color.secondary : props.theme.color.primary };
      padding: 0rem .6rem;
    }

  `
  };



`


