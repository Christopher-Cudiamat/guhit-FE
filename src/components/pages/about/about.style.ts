import styled, {css} from "styled-components";

interface IComicsTypes {
  history?:boolean,
  team?:boolean,
  banner?:boolean,
  image?:string,
  dropdown?:boolean,
  missionVision?: boolean,
  media?: boolean,
}


export const Div = styled.div<IComicsTypes>`
  padding: 3rem 2rem;
 

  ${({banner}) => banner && 
    css`
      padding: 0rem;
      margin-top: -1px;
     
      & p:first-child  {
        color: ${props => props.theme.color.white};
        padding: 0rem 2rem 2rem 2rem; 
        font-size: 3.4rem;
        line-height: 2.7rem;
      }
      & p:last-child {
        color: ${props => props.theme.color.white};
        padding: 0px 2rem;
        font-size: 2.4rem;
        line-height: 2.7rem;
      } 
  `}; 

  ${({history}) => history && 
    css`
      text-align: center;
      margin: auto;
      background: #ddd;
      
      & p {
        font-size: 1.8rem;
        line-height: 2.7rem;
        color:  ${props => props.theme.color.blackLight};
        @media ${props => props.theme.media.laptop} {
          margin: auto; 
          width:70rem;
        }
      }
     
  `}; 

  ${({missionVision}) => missionVision && 
    css`
      padding: 5rem 2rem;
      text-align: center;
      margin: auto;
      background: #eee;

      & p {
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 1.8rem;
        padding: 4rem 2rem;
        line-height: 2.7rem;
        color:  ${props => props.theme.color.blackLight};
        box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
        @media ${props => props.theme.media.laptop} {
          margin: auto; 
          width:50rem;
        }
      }
     
  `}; 

  ${({team}) => team && 
    css`
      text-align: center;
      margin: auto;
      background:  ${props => props.theme.color.white};
      display: flex;
      flex-direction: column;
      @media ${props => props.theme.media.tablet} {
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        border-bottom: none;
      }
      @media ${props => props.theme.media.laptop} {
        width:110rem;
      }
      

      & h2:first-child{
        @media ${props => props.theme.media.tablet} {
          width:100%;
        }
      }

      & p {
        font-size: 1.6rem;
        line-height: 2.7rem;
        color:  ${props => props.theme.color.blackLight};
      }

      & div {
        margin: 4rem 0rem 0rem 0rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;
        @media ${props => props.theme.media.tablet} {
          width:40%;
          border-bottom: none;
        }
        @media ${props => props.theme.media.laptop} {
          width:30%;
          border-bottom: none;
        }
        

          & p:first-child {
            height: 25rem;
            background: yellow;
          }

          
          & h2:nth-child(2) {
            display: block;
            width:20%;
            margin: auto;
            color: ${props => props.theme.color.grayDark};
            font-size: 2.4rem;
            margin-bottom: 1rem;
            background:  ${props => props.theme.color.primary};
            padding: 1rem 4rem;

            @media ${props => props.theme.media.laptop} {
              width:fit-content;

            }
            /* clip-path: polygon(80% 0, 100% 50%, 82% 100%, 0% 100%, 11% 51%, 0% 0%); */
          }

          & p:nth-child(3) {
            color: ${props => props.theme.color.black};
            font-size: 2rem;
           
          }
          & p:nth-child(4) {
            color: ${props => props.theme.color.gray};
            font-size: 1.6rem;
           
          }
      }
     
  `};  

  
  ${({dropdown}) => dropdown && 
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      position: fixed;
      top: 0%;
      background:rgba(225, 166,15, 0.8);
      padding-top: .8rem;
      padding-bottom: .8rem;
      font-size: 2rem;

      & label:first-child {
        color: ${props => props.theme.color.white};
        margin-right: 1.5rem;
      }
      & select:last-child {
        border-radius: 8px;
        width: 60%;
        height:3rem;
        outline: none;
        border: none;
        font-size: 1.6rem;
        color: ${props => props.theme.color.grayLight};
        padding-left:.5rem; 
        @media ${props => props.theme.media.tablet} {
          width: 30%;
        }

        & option {
          outline: none;
          border: none;
          width:30px;
          box-shadow:none;
          @media ${props => props.theme.media.tablet} {
            padding: 2rem 0rem;
          }

        }
      }
     
  `};  


  
  ${({media}) => media && 
    css`
      text-align: center;
      margin: auto;
      padding: 3rem 0rem 8rem  0rem;
      background: #eee;
      
      & h2:first-child{
        margin-bottom: 4rem;
      }
          
      & div:last-child{
         background: #eee;
      }
     
  `};     
 

`




