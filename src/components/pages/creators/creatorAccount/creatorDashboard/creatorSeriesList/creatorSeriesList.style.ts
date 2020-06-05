import styled, {css} from "styled-components";

interface ICreatorSeriesTypes {
  seriesCard?: boolean;
  buttons?: boolean;
  genre?: boolean;
  deleteSeries?:boolean;
}


export const Div = styled.div<ICreatorSeriesTypes >`
  
  @media ${props => props.theme.media.laptop} {
    
  }
  
  ${({seriesCard}) => seriesCard && 
    css`
    position:relative;
    background: ${props => props.theme.color.grayLightest};
    border-radius: 1rem;
    margin-bottom:3rem;
    
    @media ${props => props.theme.media.laptop} {
      border-top-left-radius: 3rem;
      border-bottom-right-radius: 3rem;
      margin-bottom:0rem;
    }

    @media ${props => props.theme.media.laptop} {
      display: flex; 
      padding: 2rem 3rem;
      margin-bottom:2rem;
    }

    &  img:first-child{
      width: 100%;
      height: auto;
      @media ${props => props.theme.media.laptop} {
        width: auto;
        height: 30rem;
        margin-right:2rem;
      }
    }

    &  div:last-child{
      text-align: left;
      padding:1rem;
      @media ${props => props.theme.media.laptop} {
        padding: 0rem;
      }
      
      & p:nth-child(3) {
        margin-bottom: .5;
      } 
  
      & p:nth-child(4) {
        margin-bottom: 3rem;
      }
    }
  `}; 

  ${({buttons}) => buttons && 
    css`
    
    display: none;

    @media ${props => props.theme.media.laptop} {
      display: block;
    }

    & * {
      @media ${props => props.theme.media.laptop} {
        width: 90%;
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

  ${({deleteSeries}) => deleteSeries && 
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

        &:hover * {
          display:nonek;
        }
      }
  `};


   
 

`









      

