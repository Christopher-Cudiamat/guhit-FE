import styled, {css} from "styled-components";

interface IPublishTypes {
  submit?:boolean,
}

export const Div = styled.div<IPublishTypes>`
  
  ${({submit}) => submit && 
    css`
      padding: 2rem;
      text-align: center;
      background:${props => props.theme.color.grayLightest}; 
      display: flex;
      flex-direction: column;

      @media ${props => props.theme.media.laptop} { 
        padding: 10rem; 
        text-align: left;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }

      & h2 {
        margin-top: 2rem;
        margin-bottom: 2rem;

        @media ${props => props.theme.media.laptop} { 
          margin-top: 0rem;
          margin-bottom: 5rem;
        }
      }

      & div:first-child {
        font-size: 2rem;
        line-height: 2.4rem;
        margin-bottom: 3rem;

        @media ${props => props.theme.media.laptop} { 
          width: 33%;
          margin-bottom: 0rem;
        }

        & p {
          color:${props => props.theme.color.gray}; 
        }
      }

      & img {
        order: -1;

        @media ${props => props.theme.media.laptop} { 
          order: 1;
        }
      }
  `}; 
 
`







