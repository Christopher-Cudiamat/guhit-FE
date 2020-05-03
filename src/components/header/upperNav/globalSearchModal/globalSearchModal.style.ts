import styled, {css} from "styled-components";

interface IUpperNavTypes {
  searchContainer?: boolean,
  signUp?: boolean,
  active?:boolean,
  left?:boolean,
  relative?:boolean,
  svg?:boolean,
  searchMobile?:boolean,
}

export const Container = styled.div<IUpperNavTypes>`
    width: 100%;
   
     
  @media ${props => props.theme.media.laptop} { 
    max-width: 110rem;
    margin:auto;
  }
`


export const Div = styled.div<IUpperNavTypes>`
  display: flex;
  margin-right: "0px";
 

  
  ${({searchMobile}) => searchMobile&&
    css`
    display:inline;
    margin-top:-1px;
      @media ${props => props.theme.media.laptop} { 
        display:none;
      } 
    `
  };

  ${({searchContainer}) => searchContainer &&
      css`
        display:flex;
        align-items:center;
        background: ${props => props.theme.color.white};
        padding:  0rem 1rem;

        & input {
          width:100%;
          border: none;
          border-color: transparent;
          border-radius: 0px;
      }
        }
      `
  };
`




