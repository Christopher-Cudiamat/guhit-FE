import styled from "styled-components";


export const Div = styled.div`
 text-align: center;
 padding: 0rem 3rem;
 margin:6rem 0rem 6rem 0rem; 


  @media ${props => props.theme.media.laptop} {
     
    margin:2rem 0rem 8rem 0rem; 
  }
 
  & div:last-child{
    margin:auto;
    margin-top: -5.5rem;
    width: 60%;
    padding: 5rem;

  @media ${props => props.theme.media.laptop} {
    width: 30%;    
  }
   
 }

`
