import styled, {css} from "styled-components";

interface INotifTypes {
  notif?: boolean,
  notifList?: boolean,
  notifLinks?: boolean,
}

export const Container = styled.div<INotifTypes>`
background: ${props => props.theme.color.white};
width: 100%;


  @media ${props => props.theme.media.laptop} { 
    width: 40rem;
    border-radius: 30px;
  }
`

export const Div = styled.div<INotifTypes>`
background: ${props => props.theme.color.white};
color: ${props => props.theme.color.black};
margin-right: 0rem;


  ${({notif}) => notif &&
    css`
      display: flex;
      flex-direction:column;
      background: ${props => props.theme.color.grayLightest};
      border-bottom: 1px solid #ccc;
      padding: 1rem 1.5rem;
      & p:first-child {
        font-size: 2.4rem;
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

  ${({notifList}) => notifList&&
    css`
      padding: 4rem 1.5rem;
      text-align: center;
      
      color: ${props => props.theme.color.gray};
      border-bottom: 1px solid #ccc;
      letter-spacing: 1px;
    } 
    `
  };

  
${({notifLinks}) => notifLinks&&
    css`
      padding: 1.5rem 1.5rem;
      text-align: center;
      @media ${props => props.theme.media.laptop} { 
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0px 15px 10px -15px #a8a8a8;  
      }
    } 
    `
  };
  

`




