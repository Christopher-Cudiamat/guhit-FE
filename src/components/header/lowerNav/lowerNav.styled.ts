import styled from "styled-components";


interface ILowerNavTypes {
  ShowDesktop?: boolean,
  color?: boolean,
}


export const Container = styled.div<ILowerNavTypes>`
  position:relative;
  z-index:999;
  @media ${props => props.theme.media.laptop} { 
    max-width: 110rem;
    margin:auto;
    padding-top:1rem;
    
  }
`

export const Menu = styled.div<ILowerNavTypes>`
  display: flex;

    & p:first-child {
      display: none;
      @media ${props => props.theme.media.laptop} { 
        font-weight: 500;
        border-radius: 1.5rem;
        font-size: 1.4rem;
        border:1px solid white;
        padding: .5rem 2rem;
        letter-spacing: 1px;
        display: block;
        color: ${props => props.color
        ? props.theme.color.primary 
        : props.theme.color.white };
        transition: .5s all;
        }
    }

    & div:last-child {
      display: block;
      @media ${props => props.theme.media.laptop} { 
        display: none
      }
    }
  `



export const Ul = styled.ul`
  display: flex;

  & li:last-child {
    display: none;
    @media ${props => props.theme.media.laptop} { 
      display: block
    }
  }
`
export const List = styled.li`
  margin-right: 1rem;
  font-weight:500;
`


