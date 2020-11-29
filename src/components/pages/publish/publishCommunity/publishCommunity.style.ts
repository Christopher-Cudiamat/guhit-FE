import styled, {css} from "styled-components";

interface IPublishTypes {
  community?:boolean,
}

export const Div = styled.div<IPublishTypes>`
  
  ${({community}) => community && 
    css`
      background:${props => props.theme.color.grayLightest}; 
      padding: 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;

      @media ${props => props.theme.media.laptop} { 
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 10rem;
        text-align: left;
      }

      & h2 {
        margin-top: 2rem;
        margin-bottom: 2rem;

        @media ${props => props.theme.media.laptop} { 
          margin-top: 0rem;
          margin-bottom: 5rem;
        }
      }

      & img {
        order: -1;

        @media ${props => props.theme.media.laptop} { 
          order: 1;
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

          @media ${props => props.theme.media.laptop} { 
            margin-bottom: 0rem;
          }
        }
      }
  `}; 

`







