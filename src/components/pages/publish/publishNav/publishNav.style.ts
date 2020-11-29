import styled, {css} from "styled-components";

interface IPublishTypes {
  nav?:boolean,
}

export const Div = styled.div<IPublishTypes>`
  
  ${({nav}) => nav && 
    css`
      display: none;

      @media ${props => props.theme.media.laptop} { 
        display: block;
        position: sticky;
        top: 0;
        border-bottom: 1px solid ${props => props.theme.color.gray};
        padding: 0rem;
        margin-top: -1px;
        background:white !important;
        z-index: 888;
      }
    
      & ul  {
        font-size: 1.8rem;
        font-weight: 600;
        display: flex;
        justify-content: space-around;
        max-width: 80rem;
        margin: auto;
      }

      & ul a {
        margin: 0rem 2rem; 
        padding: 2rem 0rem 1.5rem 0rem;
        cursor:pointer;
      }
  `}; 

`







