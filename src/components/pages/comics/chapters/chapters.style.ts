import styled, {css} from "styled-components";
// import comics from "../../../../images/comics-1.jpg";
import comics from "../../../../images/chapter-cover.png";

interface IComicsTypes {
  chaptersList?:boolean,
  banner?:boolean,
  overview?:boolean,
  small?:boolean,
  titleContainer?:boolean,
  
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
    width: 30%; 
  }

`



export const Div = styled.div<IComicsTypes>`
  background: ${props => props.theme.color.black};
  padding: 0rem;

  & h2:last-child {
      position: absolute;
      text-align:center;
      width:100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${props => props.theme.color.white};
  }

  ${({banner}) => banner && 
    css`
      color: ${props => props.theme.color.white};
      margin-top: -1px;
      background: url(${comics});
      height: 200px;
      padding: 0rem;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: .2;
     
  `}; 

  ${({overview}) => overview && 
    css`
       @media ${props => props.theme.media.laptop} { 
        position:relative;
        z-index: 30;
        width: 70rem;
        margin: auto;
        margin-top: -2rem;
        box-shadow: 0 2px 3px rgba(0,0,0,0.16), 0 2px 3px rgba(0,0,0,0.1);
      }
  `}; 

  

  ${({chaptersList}) => chaptersList && 
    css`
      padding: 0rem 0rem;
      color: ${props => props.theme.color.gray};
      background: ${props => props.theme.color.white};
      margin: auto; */
      margin-bottom: 4rem;
      @media ${props => props.theme.media.laptop} { 
        width: 70rem;
      }
    `}; 


    ${({titleContainer}) => titleContainer && 
      css`
        background: ${props => props.theme.color.white};
        margin: 3rem 0rem 2rem 0rem;
        display:flex;
        justify-content: space-between;
        align-items:center;

        & div:nth-child(2){
          display: flex;
          align-items:center;
          
          & div:first-child{
            display: flex;
            flex-direction:column;
            align-items:flex-end;
            color: ${props => props.theme.color.primary};   
          }
          & img  {
            margin-left: 1rem;  
          }
        }
      
    `}; 
  
`


      
// color: ${props => props.acti ? props.theme.color.primaryLight : props.theme.color.primary};

