import styled, {css} from "styled-components";


interface IFormTypes { 
  loginOptions?: boolean,
  signUp?: boolean,

}


export const Div = styled.div<IFormTypes>` 
  text-align:center;

  /* & div {
    margin-bottom:
  } */
 
  ${({loginOptions}) => loginOptions &&
      css`
        margin-bottom: 3rem;
        color: ${props => props.theme.color.gray};
        & span {
          line-height: 2.4rem;
          font-size: 1.6rem;
          color: 
          ${props => props.signUp ? props.theme.color.secondary : props.theme.color.primary };
          padding: 0rem .6rem;
        }
      `
  };



`


