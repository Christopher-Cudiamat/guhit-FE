import styled, {css} from "styled-components";

interface IHomeBannerTypes {
  banner?:boolean,
  bannerContainer?:boolean,
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

export const Div = styled.div<IHomeBannerTypes>`
  padding: 0rem 1.5rem;

  @media ${props => props.theme.media.laptop} { 
    padding-left: 0rem;
    padding-right: 0rem;
    padding-bottom: 10rem;
  }

  ${({banner}) => banner &&
    css`
      max-width: 80rem;
      margin: auto;
      text-align: center;
      padding-left: 0rem;
      padding-right: 0rem;
      
      @media ${props => props.theme.media.laptop} { 
        text-align: left;
        display:flex !important;
        /* height: 65vh; */
      }

      & div:first-child {
        width:100%;
        @media ${props => props.theme.media.laptop} { 
          width:55%;
        }
  
        & h1:nth-child(1),
        & h1:nth-child(2) {
          margin: 4rem  .5rem 3rem .5rem;
          color: ${props => props.theme.color.black};
          font-size: 4.4rem;
          @media ${props => props.theme.media.laptop} { 
            margin: 4rem auto 2rem auto;
          }
        }

        p:nth-child(3) {
          margin-bottom: 3rem;
          color: ${props => props.theme.color.black};
          padding-left: 2rem;
          padding-right: 2rem;
          line-height: 2.2rem;
          font-size:1.6rem;
          /* display:none; */

          @media ${props => props.theme.media.laptop} { 
            display: block;
            margin:auto;
            margin-bottom: 4rem;
            padding-left: 0rem;
            padding-right: 0rem;
          }
        }
        & button:last-child {

        }

      }

      & img {
        margin: auto;
        margin-top: 3rem;
      }
    `
  };
  
`
