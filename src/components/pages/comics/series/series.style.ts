import styled, {css} from "styled-components";

interface IComicsTypes {
  chaptersList?:boolean,
  banner?:boolean,
  overview?:boolean,
  container?:boolean,
  bannerPic?:any,
  bannerContainer?:boolean,
}



export const Div = styled.div<IComicsTypes>`

  ${({container}) => container && 
    css`
      margin-bottom: 5rem;
      @media ${props => props.theme.media.laptop} { 
        display:flex;
        width:90rem;
        margin:auto;
        margin-bottom: 5rem;
      }
     
  `}; 

  ${({bannerContainer}) => bannerContainer && 
    css`
    background:#222222;
  `};

  ${({banner}) => banner && 
    css`
      position: relative;
      color: ${props => props.theme.color.white};
      background: url(${props => props.bannerPic ? props.bannerPic : props.bannerPic});
      height: 25vh;
      padding: 0rem;
      width: 100%;
      margin:auto;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* opacity: .5; */
      @media ${props => props.theme.media.laptop} { 
        /* opacity: .5; */
        width: 50%;
        height: 40vh;
      }

      & div:first-child {
        background: #222222;
        width: 100%;
        height: 100%;
        opacity: 0.5;
      }

      & h2:nth-child(2) {
        visibility: hidden;
        position: absolute;
        text-align:center;
        font-size: 2.4rem;
        width:100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${props => props.theme.color.white};
        opacity: 0.7;
        @media ${props => props.theme.media.laptop} { 
          font-size: 3.2rem;
        }
      }

    & div:last-child {
      position: absolute;
      font-size: 3.2rem;
      bottom: 2%;
      right: 2%;
     
      display: flex;
      align-items: center;
      & p:first-child {
        color: ${props => props.theme.color.white};
        font-size: 2rem;
        margin-right: 1rem;
        margin-top: .3rem;
      }
      & svg:last-child {
        width: 2.4rem;
        height: 2.4rem;
        transition: all .3s;
      
        &:hover {
          transform: scale(1.1);
          cursor:pointer;
          margin-bottom: .3rem;
        }
      }
    }
  `}; 


  ${({overview}) => overview && 
    css`
       @media ${props => props.theme.media.laptop} { 
        position:relative;
        z-index: 30;
        width: 40%;
        margin: auto;
        margin-top: 2rem;
        box-shadow: 0 2px 3px rgba(0,0,0,0.16), 0 2px 3px rgba(0,0,0,0.1);
        order: 2;
      }
  `}; 

  

  ${({chaptersList}) => chaptersList && 
  css`
    padding: 0rem 0rem;
    color: ${props => props.theme.color.gray};
    background: ${props => props.theme.color.white};
    margin: auto; 
    margin-bottom: 4rem;
    margin-top: 0rem;
    min-height:80vh;
    @media ${props => props.theme.media.laptop} { 
      width: 55%;
      order: 1;
    }
  `}; 
  
`
