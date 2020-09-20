import styled, {css} from "styled-components";
// import comics from "../../../../images/comics-1.jpg";
import comics from "../../../../images/banners/banner.jpg";

interface IComicsTypes {
  chaptersList?:boolean,
  banner?:boolean,
  overview?:boolean,
  small?:boolean,
  titleContainer?:boolean,
  container?:boolean,
  noResult?:boolean,
  bannerPic?:any
}


export const Avatar = styled.img<IComicsTypes>`
  border-radius:50%;
  width: ${props => props.small ? "4rem" : "8rem"};
  height: ${props => props.small ? "4rem" : "8rem"};
  margin-top: ${props => props.small ? "0rem" : "3rem"};
  margin-bottom: ${props => props.small ? "0rem" : "1rem"};
  

`
export const Support = styled.p<IComicsTypes>`
  line-height: 2rem;
  font-size: 1.6rem;
  color: ${props => props.theme.color.primary};
  border-radius: 10px;
  border: 1px solid  ${props => props.theme.color.primary};
  padding: 1rem 0rem;
  width: 50%;
  margin: auto;
  @media ${props => props.theme.media.laptop} { 
    width: 60%; 
  }

`



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

  & h2:last-child {
      position: absolute;
      text-align:center;
      font-size: 3.2rem;
      width:100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${props => props.theme.color.white};
  }

  ${({banner}) => banner && 
    css`
      color: ${props => props.theme.color.white};
      background: url(${props => props.bannerPic ? props.bannerPic : props.bannerPic});
      height: 200px;
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
      opacity: .5;
      @media ${props => props.theme.media.laptop} { 
        opacity: .5;
        width: 50%;
        height: 40vh;
      }
  `}; 

  ${({noResult}) => noResult && 
    css`
    margin-top: 15rem;
    margin-bottom: 20rem;
    text-align: center;
    & h3 {
      color:  ${props => props.theme.color.gray};
    }
     
  `}; 

  ${({overview}) => overview && 
    css`
       @media ${props => props.theme.media.laptop} { 
        position:relative;
        z-index: 30;
        width: 35%;
        margin: auto;
        margin-top: -1px;
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
        width: 60%;
        order: 1;
      }
    `}; 


    ${({titleContainer}) => titleContainer && 
      css`
        background: ${props => props.theme.color.white};
        margin: 3rem 0rem 3rem 0rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding: 0rem 1rem;
          
        & h2 {
          margin-bottom: .5rem;
        }
      `}; 
  
`


      
// color: ${props => props.acti ? props.theme.color.primaryLight : props.theme.color.primary};

