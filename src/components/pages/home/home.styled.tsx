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
}

export const Container = styled.div`
 
  @media ${props => props.theme.media.laptop} { 
    max-width: 80rem;
    margin:auto;
    margin-top:-4rem; 
  }
`

export const Div = styled.div<IHomeTypes>`
  padding: 0rem 1.5rem;

  @media ${props => props.theme.media.laptop} { 
    padding-left: 0rem;
    padding-right: 0rem;
  }

  ${({banner}) => banner &&
    css`
      text-align:center;
      padding-left: 0rem;
      padding-right: 0rem;
      
      @media ${props => props.theme.media.laptop} { 
        width: 70rem;
      }

      & h1:first-child {
        margin: 0rem .5rem;
        margin-bottom: 3rem;
        margin-top:6rem;
        color: ${props => props.theme.color.black};

        @media ${props => props.theme.media.laptop} { 
          width: 50%;
          margin: 4rem auto 3rem auto;
        }
      }

      p:nth-child(2) {
        margin-bottom: 3rem;
        color: ${props => props.theme.color.black};
        display:none;

        @media ${props => props.theme.media.laptop} { 
          display: block;
          line-height: 2rem;
          width: 60rem;
          margin:auto;
          margin-bottom: 4rem;
          font-size:2rem;
        }
      }

      & img {
        margin: auto;
        margin-top: 3rem;
      }
    `
  };
 

  ${({featuredSection}) => featuredSection &&
    css`
    margin-top: 5rem;
    position: relative;
 
    @media ${props => props.theme.media.tablet} { 
      max-width: 80rem;
      margin: auto;
      margin-top: 5rem;
    }

    & div {v
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
      }
    
  `}; 


  ${({testimonials}) => testimonials && 
    css`
      
  `}; 

  ${({status}) => status && 
    css`
      position:relative;
      z-index: 20;
      display: block;
      margin: 2rem 1rem 0rem 1rem ;

      @media ${props => props.theme.media.tablet} { 
        max-width: 90rem;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin:auto;
        margin-top: 0rem;
        margin-bottom:-14rem;
      }

      @media ${props => props.theme.media.laptop} { 
        justify-content: space-between;
      }

      & div {
        background: ${props => props.theme.color.grayLightest};
        color: ${props => props.theme.color.gray};
        border-radius: 3rem;
        padding: 2rem 2rem 4rem 2rem;
        margin-bottom: 2rem;
        text-align: center;
        box-shadow: 0 5px 5px rgba(0,0,0,0.1), 0 5px 5px rgba(0,0,0,0.1);

        @media ${props => props.theme.media.tablet} { 
          width: 25%;
        }
        @media ${props => props.theme.media.laptop} { 
          width: 27%;
        }
        
        & svg {
          width: 3.2rem;
          height: 3.2rem;
          color: ${props => props.theme.color.gray};
        }
      
        & p:nth-child(2){
          font-size: 2.6rem;
          margin-bottom:1rem;
          margin-top:1rem;
        }
        & p:last-child{
          font-size: 1.8rem;
          line-height: 2.2rem;
          @media ${props => props.theme.media.laptop} { 
            font-size: 1.6rem;
          }
        }
      }
    
  `}; 

  ${({creatorSection}) => creatorSection &&
    css`
    position: relative;
    background: ${props => props.theme.color.grayLightest};
    padding-top: 7rem;
    padding-bottom: 7rem;
    margin-top: 4rem;
    text-align:center;
    min-height: 300px;
    clip-path: polygon(50% 3%, 100% 0, 100% 95%, 51% 100%, 51% 100%, 0 95%, 0 0);

    @media ${props => props.theme.media.tablet} { 
      /* clip-path: polygon(50% 0%, 100% 0, 100% 90%, 51% 100%, 51% 100%, 0 90%, 0 0); */
      clip-path: polygon(50% 8%, 100% 0, 100% 85%, 50% 100%, 50% 100%, 85%, 0 0);
      padding-top: 14rem;
      padding-bottom: 8rem;
    }

    @media ${props => props.theme.media.laptop} { 
      padding-top: 16rem;
      padding-bottom: 8rem;
    }

    & :first-child {
        font-size: 5rem;
    }

    & :nth-child(2) {
        font-size: 2rem;
        color: ${props => props.theme.color.gray};
        line-height: 3rem;
        font-weight: 500;
        margin: auto;
        margin-bottom: 4.5rem;
        width: 80%;
    }

    & :nth-child(3) {

      & :nth-child(1) {
        height: 40rem;
        width: auto;
        opacity: 1;
      }
    }
   
    & :last-child {
        width:70%;
        margin-top: -1.5rem;

        @media ${props => props.theme.media.tablet} { 
          width:35%;
          height:7rem;
        }

        @media ${props => props.theme.media.laptop} { 
          width:25%;
          height:6rem;
        }
    }

    
    `
  }; 


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
