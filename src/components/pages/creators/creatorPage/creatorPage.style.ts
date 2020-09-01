import styled, {css} from "styled-components";

interface ICreatorTypes {
  container?:boolean,
}


export const Div = styled.div<ICreatorTypes>`
  padding: 3rem 2rem;
  margin: auto;
  @media ${props => props.theme.media.tablet} {
    width: 60%; 
  }

  @media ${props => props.theme.media.laptop} {
    width: 30%; 
  }
  
  ${({container}) => container && 
    css`
      text-align: center;

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
 

`









      


 




      


