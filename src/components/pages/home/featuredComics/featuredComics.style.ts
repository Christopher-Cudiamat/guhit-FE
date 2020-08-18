import styled, {css} from "styled-components";

interface IFeaturedComicsTypes {
  featuredSection?:boolean,
  featuredTitle?: boolean,
} 

export const Container = styled.div`
 
  @media ${props => props.theme.media.laptop} { 
    max-width: 120rem;
    margin:auto;
    margin-top:-4rem; 
  }
`

export const Div = styled.div<IFeaturedComicsTypes>`
  padding: 0rem 1.5rem;

  @media ${props => props.theme.media.laptop} { 
    padding-left: 0rem;
    padding-right: 0rem;
  }


  ${({featuredSection}) => featuredSection &&
    css`
    margin-top: 5rem;
    position: relative;
 
    @media ${props => props.theme.media.tablet} { 
      max-width: 80rem;
      margin: auto;
      margin-top: 5rem;
    }

    & div {
      margin-bottom:1rem;
    }
    `
  }; 

  ${({featuredTitle}) => featuredTitle && 
    css`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding-bottom:2rem;
      padding-left:0rem;
      padding-right:0rem;

      @media ${props => props.theme.media.tablet} { 
        margin: 0rem 1.8rem;
        padding-bottom: 2rem;
      }

      & a {
        color: ${props => props.theme.color.primaryDark};
        @media ${props => props.theme.media.tablet} { 
          &:hover {
            font-weight: bold;
            cursor:pointer;
            transition: all .5s;
          }
        }
      }
    
  `}; 
  
`
