import styled, {css} from "styled-components";

interface INotifTypes {
  account?: boolean,
  accountList?: boolean,
  accountLogout?: boolean,
}

export const Container = styled.div<INotifTypes>`
  width: 100%;
  background: ${props => props.theme.color.white};
  border-radius: 1rem;

  @media ${props => props.theme.media.laptop} { 
    position:absolute;
    top: 40%;
    right: 0%;
    width: 25rem;
  }
`

export const Div = styled.div<INotifTypes>`
background: ${props => props.theme.color.white};
color: ${props => props.theme.color.black};
margin-right: 0rem;

  ${({account}) => account &&
    css`
      display: flex;
      flex-direction:column;
      background: ${props => props.theme.color.grayLightest};
      border-bottom: 1px solid #ccc;
      padding: .8rem 1rem;
      & p:first-child {
        font-size: 1.8rem;
        font-weight: bold;
      }
      & p:nth-child(2) {
        border: none;
        outline: none;
        font-size:1.6rem;
        width: 100%;
        padding-top: .5rem;
        background: none;
      }
      @media ${props => props.theme.media.laptop} { 
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    } 
    `
  };

  ${({accountList}) => accountList&&
    css`
      text-align: center;
      & nav > {
        color: ${props => props.theme.color.blackLight};
      }
      & nav > ul > a> li  {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.6rem;
        border-bottom: 1px solid  ${props => props.theme.color.grayLightest};
        padding: 1rem 0rem;
      }
      & nav > ul > a > li > a {
        font-weight: 700;
        padding-left: 1rem;
      }
      & nav > ul > a > li > svg {
        padding-right: 1rem;
      }

    } 
    `
  };

  
${({accountLogout}) => accountLogout&&
    css`
      font-size: 1.8rem;
      & > a > div  {
        padding: 2rem 1rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
      }
      & > svg  {
        padding-right: 2rem;
      }
      &  p  {
        font-weight: 700;
        /* line-height:2.4; */
      }
      @media ${props => props.theme.media.laptop} { 
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0px 15px 10px -15px #a8a8a8;  
      }
    } 
    `
  };
  

`




