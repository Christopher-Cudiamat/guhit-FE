import styled, {css} from "styled-components";

interface IPublishTypes {
  bannerContainer?:boolean,
}

export const Div = styled.div<IPublishTypes>`

  ${({bannerContainer}) => bannerContainer && 
    css`
      margin-top: -1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow-x:hidden;
     
      & p:first-child  {
        margin-bottom: 1.6rem;
      }

      & p:nth-child(2)  {
        margin-bottom: 4.6rem;
        width: 50%;
        align-self: center;
        line-height: 2.4rem;
        font-weight: 100;
      }

      & button:last-child {
        width: 25%;
        height: 7rem;
       font-size: 2.6rem;
        align-self: center;
        border-radius: 4rem;
      } 
  `};

`







