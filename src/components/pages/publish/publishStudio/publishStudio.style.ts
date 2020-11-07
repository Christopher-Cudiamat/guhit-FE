import styled, {css} from "styled-components";

interface IPublishTypes {
  studio?:boolean,
}

export const Div = styled.div<IPublishTypes>`
  
  ${({studio}) => studio && 
    css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 10rem; 

      & div:first-child {
        background: yellow;
        padding: 1rem;
        width: 400px;
        height: 400px;
      }

      & div:last-child {
        font-size: 2rem;
        width: 33%;
        line-height: 2.4rem;
        & p {
          color:${props => props.theme.color.gray}; 
        }
      }
  `}; 
 

`







