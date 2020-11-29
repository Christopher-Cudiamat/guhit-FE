import styled, {css} from "styled-components";

interface IPublishTypes {
  bannerContainer?:boolean,
}

export const Div = styled.div<IPublishTypes>`

  ${({bannerContainer}) => bannerContainer && 
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow-x:hidden;
      margin: auto;
      margin-top: -1px;
     
      & p:first-child  {
        margin:0 auto;
        margin-bottom: 2rem;
        font-size: 4.4rem;
        width: 100%;
        @media ${props => props.theme.media.laptop} { 
          width: 50%;
          margin-bottom: 1.6rem;
          font-size: 6.4rem;
        }
      }

      & p:nth-child(2)  {
        margin-bottom: 4.6rem;
        width: 100%;
        align-self: center;
        line-height: 2.4rem;
        font-weight: 100;
        @media ${props => props.theme.media.laptop} { 
          width: 50%;
        }
      }

      & button:last-child {
        width: 80%;
        height: 7rem;
        font-size: 2.6rem;
        align-self: center;
        border-radius: 4rem;

        @media ${props => props.theme.media.laptop} { 
          width: 25%;
        }
      } 
  `};

`







