import styled, {css} from "styled-components";

interface IHomeTypes {
  testimonials?:boolean,
  contents?:boolean,
}


export const Div = styled.div<IHomeTypes>`
 
  ${({testimonials}) => testimonials &&
    css`
      padding: 2rem 1.5rem 5rem 1.5rem;
      margin: 2rem 0rem 5rem 0rem;
      overflow-x:hidden;
      border-bottom: 1px solid #ddd;
      border-top: 1px solid #ddd;

      @media ${props => props.theme.media.tablet} { 
        max-width: 80rem;
        margin: 5rem auto;
        padding: 2rem 7rem 5rem 7rem;
      }

      & h2{
        @media ${props => props.theme.media.tablet} { 
          margin-left: 2rem;
          /* padding: 2rem 5rem 5rem 5rem; */
        }
      }
    `
  };

  ${({contents}) => contents &&
    css`
      padding: 2rem 0rem;
      
      @media ${props => props.theme.media.tablet} { 
        display:flex !important;
        align-items: center;
        justify-content: space-around;
      }


      & div:first-child {
        @media ${props => props.theme.media.tablet} { 
          width:40%;
        }
        & img:first-child{
          width: 50%;
          margin: auto;
          @media ${props => props.theme.media.tablet} { 
            width: 100%;
            display:flex !important;
            align-items: center;
          }
        }
      }

      & div:last-child{
        text-align: center;

        @media ${props => props.theme.media.tablet} { 
          width:50%;
          text-align: left;
        }

        & svg:first-child{
          color: #0ACCA9;
          width: 5rem;
          height: 5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          @media ${props => props.theme.media.tablet} { 
            text-align:left;
          }
        }

        & p:nth-child(2){
          font-size: 1.8rem;
          color: ${props => props.theme.color.blackLight};
          font-weight: 200;
          line-height: 2.4rem;
          @media ${props => props.theme.media.tablet} { 
            font-size: 2.2rem;
            line-height: 3.4rem;
          }
        }
        & p:nth-child(3){
          font-size: 1.8rem;
          margin: 2.2rem 0rem;
          font-style: italic;
          font-weight: 700;
          color: ${props => props.theme.color.gray};
        }
        & button:last-child{
          width: 70%;
        }
      }
    `
  };
 
  
  
`
