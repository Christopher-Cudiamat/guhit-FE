import styled, {css} from "styled-components";

interface ICreatorDashboardTypes {
  dashboardContainer?:boolean,
}


export const Div = styled.div<ICreatorDashboardTypes>`
  padding: 3rem 2rem;
  position:relative;
  @media ${props => props.theme.media.laptop} {
    box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
    border-radius:1rem;
  }
  
  ${({dashboardContainer}) => dashboardContainer && 
    css`
    text-align:center;
    /* background: ${props => props.theme.color.grayLightest}; */

    &  div:first-child{
      display:flex;
      justify-content: space-between;
      width: 100%;
      & select {
        width: 50%;
        height: 4rem;
        font-size: 1.8rem;
        border-radius: 1rem;
        margin-bottom: 5rem;
        outline: none;
        @media ${props => props.theme.media.laptop} {
          width: 40%;  
        }

        & option{
          border: none;
          outline: none;
        }
      }

      /* & div:last-child() {

      } */
    }
  

    /* & div:last-child {
        border-radius: .4rem;
        border: 1px solid ${props => props.theme.color.grayLight};
        padding: 2rem 0rem;
        margin-bottom: 7rem;

        & h2:first-child{ 
          color: ${props => props.theme.color.gray};
        }

        & button:last-child{ 
          margin-top: 5rem;
        }
    } */

    /* & div:last-child {
      padding: 2rem 0rem;
      display: flex;
      background: ${props => props.theme.color.grayLight};
      color: ${props => props.theme.color.gray};
      justify-content:space-evenly;
      position: absolute;
      bottom: 0%;
      right:0%;
      font-size: 1.6rem;
      width: -webkit-fill-available;
     
      @media ${props => props.theme.media.laptop} {
        padding: 2rem 2rem;
        width: 80%;
        font-size: 1.6rem;
        border-top-left-radius:2rem;
        border-top-right-radius:2rem;
        left: 50%;
        
        transform: translate(-50%, 0%);
      }

    } */
     
  `};   


   
 

`









      

