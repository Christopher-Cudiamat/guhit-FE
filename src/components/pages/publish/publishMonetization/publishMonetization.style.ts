import styled, {css} from "styled-components";

interface IPublishTypes {
  monetization?:boolean,
  active?: boolean,
}

export const Div = styled.div<IPublishTypes>`
  display: flex;
  justify-content: space-around;
  
  ${({monetization}) => monetization && 
    css`
      padding: 10rem;
      background: white; 
      justify-content: space-evenly;
      align-items: center;
  
      & div:first-child {
        padding: 1rem;
        width: 33%;
        font-size: 1.8rem;
        line-height: 2.4rem;
        color:${props => props.theme.color.gray}; 
      }

      & div:last-child {

        & p:nth-child(2) {
          font-size: 2rem;
        }

        & div {
          display: flex;
          padding: 2rem;
          background: ${props => props.theme.color.grayLightest}; 
          color: ${props => props.theme.color.blackLight}; 
          border:   ${props => props.active ? `2px solid red` : "none"}; 
          margin-bottom: 1rem;
          margin-top: 1rem;
          font-size: 1.8rem;
          font-weight: 600;
          border-radius: 1rem;
          
          cursor: pointer;
          
          &:hover{
            background: ${props => props.theme.color.grayLight}; 
          }
          & p {
            margin-left: 1rem;
          }
        }
      }
  `};   
 

`







