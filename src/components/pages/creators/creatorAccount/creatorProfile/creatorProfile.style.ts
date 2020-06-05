import styled, {css} from "styled-components";

interface ICreatorAccountTypes {
  profileContainer?:boolean,

}


export const Div = styled.div<ICreatorAccountTypes>`
  padding: 3rem 2rem;
  
  ${({profileContainer}) => profileContainer && 
    css`
      text-align: center;
      @media ${props => props.theme.media.laptop} {
        box-shadow: 0px 3px 10px rgba(0,0,0,0.2);
        border-radius:1rem;
      }

      & img:first-child {
        margin-bottom: 1rem;
        height: auto;
        width: 60%; 
        box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
        @media ${props => props.theme.media.laptop} {
          height: auto;
          width: 80%; 

          
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
        font-size:1.4rem;
      }

      & p:nth-child(5){
        margin-top: 2rem;
        margin-bottom: 3rem;
        line-height: 2rem;
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
 

`









      

