import styled, {css} from "styled-components";

interface ICreatorDashboardTypes {
  dashboardContainer?:boolean,
  publishOption?: boolean,
  dashboardNav?: boolean,
}


export const Div = styled.div<ICreatorDashboardTypes>` 
  padding: 3rem 2rem;
  
  @media ${props => props.theme.media.laptop} {
    box-shadow: 0px 3px 10px rgba(0,0,0,0.2);
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

    }

    & h4:last-child {
      color: ${props => props.theme.color.blackLight};
      &:hover {
        cursor:pointer;
      }
    }
  
  `};   


  ${({dashboardNav}) => dashboardNav && 
  css`
    position: relative;
    padding: 0rem;
  
    @media ${props => props.theme.media.laptop} {
      box-shadow: none;
      border-radius:0rem;
    }
    
  `}; 

  ${({publishOption}) => publishOption && 
  css`
    padding: 0rem;
    color: ${props => props.theme.color.white};
    position: absolute;
    right: 0%;
    top: 29%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    
    & h4 {
      padding: 2rem 3rem;
      background: ${props => props.theme.color.secondary};
      color: ${props => props.theme.color.blackLight};
      &:hover {
        color: ${props => props.theme.color.white};
        background: ${props => props.theme.color.secondaryLight};
        cursor:pointer;
        transition: .2s all;
      }
    }
  
  `};   


   
 

`









      

