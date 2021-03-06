import styled, {css} from "styled-components";

interface ICreatorSeriesTypes {
  chapterCard?: boolean;
  buttons?: boolean;
  genre?: boolean;
  deleteChapter?: boolean;
}


export const Div = styled.div<ICreatorSeriesTypes >`
  
  @media ${props => props.theme.media.laptop} {
    
  }
  
  ${({chapterCard}) => chapterCard && 
    css`
    /* background:#ddd; */
    background: ${props => props.theme.color.grayLightest};
    border-top-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    margin-top: 4rem;
    position: relative;
    text-align: left;

    @media ${props => props.theme.media.laptop} {
      display: flex; 
      padding: 2rem 3rem;
      margin-bottom:2rem;
    }

    &  img:first-child{
      width: auto;
      height: 20rem;
      margin-right:2rem;
    }

    &  div:nth-child(2){

      & h2:first-child {
        margin-bottom: 1rem;
      } 
      
      & p:nth-child(3) {
        margin-bottom: 1rem;
        margin-top: .5rem;
      } 
  
      & p:nth-child(4) {
        margin-bottom: 3rem;
      }
    }
  `}; 

  ${({buttons}) => buttons && 
    css`
    
    @media ${props => props.theme.media.laptop} {
     
      /* justify-content:space-evenly; */
    }

    & * {
      @media ${props => props.theme.media.laptop} {
        width: 80%;
        margin: 0px;
        display: block;
        margin-top: .5rem;
        font-size: 1.6rem;
      }
    }
  
  `};   


  ${({genre}) => genre && 
    css`
    
    @media ${props => props.theme.media.laptop} {
      display:flex;
    }

    & * {
      @media ${props => props.theme.media.laptop} {
        background: ${props => props.theme.color.primary};
        color:white;
        padding: .6rem;
        margin:1rem .5rem 1rem 0rem;
        border-radius: .4rem;
      }
    }

  
  `};


  
  ${({deleteChapter}) => deleteChapter && 
    css`
      position: absolute;
      bottom: 0%;
      right: 0%;

      & svg:last-child {
        color: ${props => props.theme.color.blackLight};
        background: ${props => props.theme.color.white};
        font-size: 2rem;
        padding: .5rem;  
        cursor: pointer;
        border-radius: 50%;
        
        &:hover {
          color: ${props => props.theme.color.white};
          background: ${props => props.theme.color.error};
        }

       
      }
  `};


   
 

`









      

