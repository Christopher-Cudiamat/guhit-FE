import styled, {css} from "styled-components";

interface IHomeTypes {
  banner?:boolean,
  bannerContainer?:boolean,
  featuredSection?:boolean,
  alignCenter?:boolean,
  creatorSection?: boolean,
  imgContainer?: boolean,
  featuredTitle?: boolean,
  status?:boolean,
  testimonials?: boolean,
  downloadApp?: boolean,
  mobile?: boolean,
  desktop?: boolean,

} 

export const Container = styled.div`
 
  @media ${props => props.theme.media.laptop} { 
    max-width: 120rem;
    margin:auto;
    margin-top:-4rem; 
  }
`
export const Div = styled.div<IHomeTypes>`

${({downloadApp}) => downloadApp &&
    css`
     padding-top: 6rem;
     margin: auto;
     text-align:center;
      /* display:flex; */
      @media ${props => props.theme.media.tablet} { 
        text-align:left;
        max-width: 80rem; 
        display:flex;
        margin: auto;
        justify-content: space-between;
        padding-top:10rem;
      }

      & div:first-child{
        display:flex;
        flex-direction:column; 
        align-items:center;
        margin-bottom: 5rem;
        @media ${props => props.theme.media.tablet} { 
          width: 50%;
          align-items:flex-start;
        }

        & > img{
          margin-bottom: 2rem;
          width: 70%;
          @media ${props => props.theme.media.tablet} { 
            margin-left: 2rem;
            margin-bottom: 1rem;
            width:70%;
          }
        }
      }

      & img:last-child{
        margin-bottom: -4px;

      }
    
    `
  }; 

  
  
`
