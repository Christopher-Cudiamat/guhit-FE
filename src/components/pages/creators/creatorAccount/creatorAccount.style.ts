import styled, {css} from "styled-components";

interface ICreatorAccountTypes {
  creatorAccount?:boolean,
  // profile?:boolean,
  // dashboard?:boolean,

}


export const DivAccount = styled.div<ICreatorAccountTypes>`

        
      @media ${props => props.theme.media.laptop} {
        /* position:relative; */
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
        width: 100rem;  
        margin:auto;
        margin-top: 5rem;
        margin-bottom: 5rem;
        /* box-shadow: 0px 3px 5px rgba(0,0,0,0.2); */
      }

`

export const DivProfile = styled.div<ICreatorAccountTypes>`
  @media ${props => props.theme.media.laptop} {
    width: 32%;  
    
  }
` 

export const DivDashboard = styled.div<ICreatorAccountTypes>`
  @media ${props => props.theme.media.laptop} {
    width: 63%;  
    margin:auto;
    margin-top: 0rem;
    margin-bottom: 0rem;    
  }
`









      

