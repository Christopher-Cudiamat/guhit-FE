import styled, {css} from "styled-components";

interface IPublishTypes {
  publishOption?:boolean,
}

export const Div = styled.div<IPublishTypes>`
  
  ${({publishOption}) => publishOption && 
    css`
      overflow-x: hidden;

      & p:first-child {
        font-size: 4.4rem;
      }
   
      & div > div {
        flex-direction: row;
        display:flex;
        justify-content: center;
      }

      & div a  button {
        padding: 2rem;
        margin-top: 2rem;
        font-size: 2.4rem;
        border-radius: 4rem;

        @media ${props => props.theme.media.laptop} { 
          padding: 2rem;
          margin-top: 4rem;
          font-size: 2.6rem;

          &:hover {
            cursor: pointer;
            background: ${props => props.theme.color.secondaryDark}; 
            transform: translateY(-10%) scale(1.1);
            transition: all .3s;
          }
        }
      }
  `}; 

 
`







