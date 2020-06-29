import styled from "styled-components";

export const DivUnderlay = styled.div`
  position: fixed;
  width: 100%;
  height: 101vh;
  background:  ${props => props.theme.color.black};
  opacity: .9;
  top: 0px;
  z-index: 999;

`

export const DivInfo = styled.div`

  background:  ${props => props.theme.color.white};
  width: 90%;
  border-radius:1rem;
  height: 50vh;
  position: fixed;
  opacity: 1;
  top:50%; 
  left:50%; 
  transform:translate(-50%, -50%); 
  padding: 2rem 1rem;
  z-index: 9999;

  
  & h3{
    color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.secondary};
    padding: 1rem;
    font-weight: 400;
  }
  & div span{
    color: ${props => props.theme.color.error};
    text-decoration: underline;
    cursor: pointer;
  }

  & button {
    margin: auto;
    margin-top: 2rem;
  }

`

