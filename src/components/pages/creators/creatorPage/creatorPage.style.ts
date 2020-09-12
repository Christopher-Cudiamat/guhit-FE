import styled, {css} from "styled-components";

interface ICreatorTypes {
  container?:boolean,
  creatorDetails?:boolean,
  creatorSeriesLists?:boolean,
}

export const Div = styled.div<ICreatorTypes>`
  padding: 3rem 0rem;
  margin: auto;

  @media ${props => props.theme.media.tablet} {
    width: 60%; 
  }

  @media ${props => props.theme.media.laptop} {
    max-width: 90rem; 
  } 
  
  ${({container}) => container && 
    css`
      text-align: center;
      @media ${props => props.theme.media.laptop} {
        display: flex;
      }
  `};     


  ${({creatorDetails}) => creatorDetails && 
    css`

      text-align: center;
      padding: 0rem 2rem;
      @media ${props => props.theme.media.laptop} {
        width: 60%;
        margin-right: 10rem; 
      }

      & img:first-child {
        margin-bottom: 1rem;
        height: auto;
        width: 50%; 
        box-shadow: 0px 1px 5px rgba(0,0,0,0.2);

        @media ${props => props.theme.media.tablet} {
          height: auto;
          width: 50%; 
        }
        
        @media ${props => props.theme.media.laptop} {
          width: 60%; 
        }
      }

      & h2 {
        margin-bottom: 2rem;
        color: ${props => props.theme.color.black};
      }
      & p:nth-child(3),
      & p:nth-child(4),
      & p:nth-child(6) {
        margin-bottom: 1rem;
        color: ${props => props.theme.color.grayLight};
        font-size:1.8rem;
      }

      & p:nth-child(5){
        margin-top: 2rem;
        margin-bottom: 3rem;
        line-height: 2.3rem;
        font-size:1.8rem;
        color: ${props => props.theme.color.blackLight};
      }

      & ul:nth-child(7){
        margin-bottom: 3rem;
        line-height: 2rem;
        color: ${props => props.theme.color.blackLight};
      }

      & p:nth-child(8){
        margin-bottom: 3rem;
        color: ${props => props.theme.color.primary};
        font-style: italic;
        font-weight: regular;
        letter-spacing: 1px;
        
      }

      & a:last-child {
        display: none;
        @media ${props => props.theme.media.laptop} {
          display: block;
          margin:auto;
          width: 50%;  
        }
      }
  `}; 


  ${({creatorSeriesLists}) => creatorSeriesLists && 
    css`
      padding: 0rem;
      text-align: left;
      margin: 0px;
      @media ${props => props.theme.media.laptop} {
        width: 40%; 
      }

      h2 {
        margin: 2rem 0rem;
        padding: 1rem 2rem;
        color: ${props => props.theme.color.white};
        background: ${props => props.theme.color.blackLight};
      }

      & > div {
          display: flex;
          align-items: center;
          padding: 1.5rem 2rem 1.5rem 2rem;
          border-bottom: 1px solid #ccc;

          @media ${props => props.theme.media.laptop} {
            padding: 1.5rem 0rem 1.5rem 0rem;
          }

          & img {
            width: 30%;
            height: auto;
            margin-right: 1rem;
            border-radius: 1rem;
          }

          & div {
            & p {
              margin: 0rem 0rem 1rem 0rem;
              color: ${props => props.theme.color.blackLight};
              font-size: 1.6rem;
              
              &:first-child {
                font-size: 2rem;
                font-weight: 700;
                color: ${props => props.theme.color.blackLight};
                @media ${props => props.theme.media.laptop} {
                  font-size: 1.6rem;
                }
              }

              &:nth-child(2) {
                color: ${props => props.theme.color.gray};
                margin-bottom: 2rem;
                @media ${props => props.theme.media.laptop} {
                  font-size: 1.4rem;
                }
              }
            }

            & button:last-child {
              font-size: 1.6rem;
              color: ${props => props.theme.color.white};
              background: ${props => props.theme.color.secondary};
              padding: 1rem 2rem;
              @media ${props => props.theme.media.laptop} {
                font-size: 1.4rem;
              }
            }
           
          }
        }
      }
     
  `};         
`









      


 




      


