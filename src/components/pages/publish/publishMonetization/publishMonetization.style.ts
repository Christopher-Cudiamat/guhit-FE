import styled, {css} from "styled-components";

interface IPublishTypes {
  monetization?:boolean,
  active?: boolean,
}

export const Div = styled.div<IPublishTypes>`
  text-align: center;

  @media ${props => props.theme.media.laptop} { 
    display: flex;
    justify-content: space-around;
    text-align: left;
  }
  
  ${({monetization}) => monetization && 
    css`
      padding: 2rem;
      background: white; 
      justify-content: space-evenly;
      align-items: center;
      @media ${props => props.theme.media.laptop} { 
        padding: 10rem;
      }
  
      & div:first-child {
        margin-top: 2rem;
        margin-bottom: 4rem;
        width: 100%;
        font-size: 1.8rem;
        line-height: 2.4rem;
        color:${props => props.theme.color.gray}; 

        @media ${props => props.theme.media.laptop} { 
          width: 33%;
        }

        & p {
          background:${props => props.theme.color.primary}; 
          color:${props => props.theme.color.white}; 
          padding: 1rem;
          border-radius: 1rem;

          @media ${props => props.theme.media.laptop} { 
            background:${props => props.theme.color.white}; 
            color:${props => props.theme.color.gray}; 
            padding: 0rem;
            border-radius: 0rem;
          }
        }
        
      }

      & div:last-child {

        & h2:first-child {
          margin-bottom: 2rem;
        }

        & p {
          font-size: 2rem;
          line-height: 2.4rem;
        }

        & div {
          display: flex; 
          padding: 2rem;
          background: ${props => props.theme.color.grayLightest}; 
          color: ${props => props.theme.color.blackLight}; 
          border:   ${props => props.active ? `2px solid red` : "none"}; 
          margin-bottom: 1rem;
          margin-top: 2rem;
          font-size: 1.6rem;
          font-weight: 600;
          border-radius: 1rem;
          
          @media ${props => props.theme.media.laptop} { 
            font-size: 1.8rem;
            margin-bottom: 1rem;
            margin-top: 1rem;
            cursor: pointer;

            &:hover{
            background: ${props => props.theme.color.grayLight}; 
            }
          }

          & p {
            margin-left: 2rem;
          }
        }
      }
  `};   
 

`







