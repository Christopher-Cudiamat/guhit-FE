import styled, {css} from "styled-components";

interface IPublishTypes {
  publishOption?:boolean,
}

export const Div = styled.div<IPublishTypes>`
  
  ${({publishOption}) => publishOption && 
    css`
      overflow-x: hidden;

      & div {
        width: 100%;
      }
   
      & div > div {
        flex-direction: row;
        display:flex;
        justify-content: center;
      }

      & div a  button {
        margin: 8rem;
       height: 7rem;
       font-size: 2.6rem;
       border-radius: 4rem;
       cursor: pointer;
       &:hover {
        background: ${props => props.theme.color.secondaryDark}; 
         transform: translateY(-10%) scale(1.1);
         transition: all .3s;
       }
      }
  `}; 

 
`







