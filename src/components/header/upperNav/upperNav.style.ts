import styled, {css} from "styled-components";

interface IUpperNavTypes {
  searchContainer?: boolean,
  signUp?: boolean,
  active?:boolean,
  left?:boolean,
  relative?:boolean,
  svg?:boolean,
  searchMobile?:boolean,
  modalsContainer?:boolean,
  account?: boolean,
  alignBaseLine?:boolean,
}

export const Container = styled.div<IUpperNavTypes>`
position: relative;
     
  @media ${props => props.theme.media.laptop} { 
    max-width: 110rem;
    margin:auto; 

  }
`

export const BrandLogo = styled.img`
  max-width:  2.6rem;
  margin-right: .5rem;
`
export const Brand = styled.div<IUpperNavTypes>`
  display: flex;
  align-items: center;
  color: ${props => props.active ? props.theme.color.primary : props.theme.color.white};
  font-size:3.5rem;
  font-weight: bold;
  font-style: italic;
     
  @media ${props => props.theme.media.laptop} { 
    padding-top: 1.5rem;

  }
`

export const Div = styled.div<IUpperNavTypes>`
  display: flex;
  align-items:center;
  margin-top:  ${props => props.alignBaseLine ? "1.5rem" : ".8rem"};

  &:first-child p {
    font-size: 4rem;
  }

  & img:last-child {
    margin-right: 0rem;
  }

  ${({relative}) => relative &&
    css`
    position:relative;
    display:none;
    align-items: baseline;

    @media ${props => props.theme.media.laptop} { 
      display:inline-block;
    }

    & input {
      font-size: 1.4rem;
      padding-top:3px;
      opacity: .8;
      width: 13rem;
      @media ${props => props.theme.media.laptop} { 
        margin-right: 1rem;
      } 
      
    }

    `
  };


  ${({svg}) => svg&&
    css`
    display:none;
    opacity: .5;

    @media ${props => props.theme.media.laptop} { 
      display:inline-block;
      position:absolute;
      top: -13%;
      right: 12%;
      pointer-events: none;
    } 
    `
  };

  ${({searchMobile}) => searchMobile&&
    css`
    display:inline;
    margin-top:-1px;
      @media ${props => props.theme.media.laptop} { 
        display:none;
      } 
    `
  };
  

  ${({left}) => left && 
    css`

      & > * {
      margin-right: 1rem;
      }

      &:last-child p {
        
        @media ${props => props.theme.media.laptop} { 
          margin-top: -2.1rem;
          /* margin-left: 0rem; */
        }
       
      }

      @media ${props => props.theme.media.laptop} { 
        align-items:flex-end;
        margin-top:0px;
      }

  `
  };

  ${({modalsContainer}) => modalsContainer &&
    css`
    position:absolute;
    top: 90%; 
    width: 100%;
    z-index: 9999;
    margin-right: 0rem;

    @media ${props => props.theme.media.laptop} { 
      width: 35rem;
      right: 0%;
      top: 90%;
    }
  
  `
  };

`


export const Avatar = styled.img<IUpperNavTypes>`
  margin-top: -5px;
  width: 2/8rem;
  height: 2.8rem;
  border-radius: 50%;
  margin-left: 1rem;

`



