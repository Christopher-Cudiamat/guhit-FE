import styled from "styled-components";

interface IUlTypes {
  toggle?: boolean, 
  showMenu?: boolean
}

export const Container = styled.div<IUlTypes>`
position:relative;
  @media ${props => props.theme.media.laptop} { 
    position:relative;
    max-width: 80rem;
    margin:auto;
  }
`

export const DivContainer = styled.div<IUlTypes>`
  position: absolute;
  /* top: ${props => (props.toggle ? "0rem" : "-60rem")};
  transition: top .1s ease-in; */
  width: 95%;
  display:  ${props => (props.toggle ? "block" : "none")};

  background: ${props => props.theme.color.blackLight};
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: Left;
  margin-top: -1px;

  & a:first-child {
    @media ${props => props.theme.media.laptop} { 
      display: none;
    }
  }

  @media ${props => props.theme.media.laptop} { 
    border-radius: 10px;
    width: 30%;
    padding-top: 1rem;
    padding-left: 2rem;
    right: -16%;
    z-index: 1;
    top: -5px;
    display:  ${props => (props.toggle ? "block" : "none")};
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  & li:last-child {
    border-bottom: none;
  }
      
`

export const DivLink = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0 1.5rem 0;
  opacity: 0.8;
  position: relative;
`

export const Link = styled.a`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${props=> props.theme.color.white};
`