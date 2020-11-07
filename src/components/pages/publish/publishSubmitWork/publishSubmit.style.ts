import styled, {css} from "styled-components";

interface IPublishTypes {
  submit?:boolean,
}

export const Div = styled.div<IPublishTypes>`
  
  ${({submit}) => submit && 
    css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 10rem; 
      background:${props => props.theme.color.grayLightest}; 

      & div:first-child {
        font-size: 2rem;
        width: 33%;
        line-height: 2.4rem;
        & p {
          color:${props => props.theme.color.gray}; 
        }
      }

      & div:last-child {
        background: yellow;
        padding: 1rem;
        width: 400px;
        height: 400px;
      }
  `}; 
 
`







