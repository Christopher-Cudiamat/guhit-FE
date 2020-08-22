import styled from "styled-components";


export const Div = styled.div`
  padding: 0rem 2rem;
  @media ${props => props.theme.media.tablet} { 
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  & ul{
    margin-top: 3rem;
    @media ${props => props.theme.media.tablet} { 
      margin-top: 4rem;
      margin-right: 2rem;
    }

    & li {
      margin-bottom: 1.2rem;
      display:flex;
      align-items: center;
      &:last-child {
        margin-bottom: 2.5rem;
      }
    }

    & li > h2 {
      margin-bottom: 2rem;
      font-size:2.8rem;
    }

    & li > svg {
      color:${props => props.theme.color.primary};
      font-size: 3rem;
      margin-right: 1rem;
    }

    & li a {
      color:${props => props.theme.color.blackLight};
      transition: .5 all;
      font-size:1.8rem;
      &:hover {
        color:${props => props.theme.color.primary};
      }
    }
  }

  & img{
    @media ${props => props.theme.media.tablet} { 
      width:45rem;
      height: auto;
    }
    @media ${props => props.theme.media.laptop} { 
      width:40rem;
    }

  }

`






