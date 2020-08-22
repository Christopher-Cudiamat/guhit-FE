import styled from "styled-components";

interface IEventsTypes {
  view?:boolean,
}

export const Div = styled.div<IEventsTypes>`
  padding: 3rem 2rem;
  margin: auto;
  @media ${props => props.theme.media.tablet} { 
    max-width: 70rem;
  }
  @media ${props => props.theme.media.laptop} { 
    max-width: 90rem;
  }
    
  & div {
    @media ${props => props.theme.media.laptop} { 
      display:flex;
    }

    & img {
      margin-bottom: 2rem;
      box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
      max-height: 100rem;
      width:100%;
      @media ${props => props.theme.media.laptop} { 
        width:50%;
        height:auto;
        margin-right:5rem;
        margin-bottom: 6rem;
      }
    }

    & button {
      margin-bottom: 6rem;
      padding: 0rem;
      @media ${props => props.theme.media.laptop} { 
        display:none;
      }
    }
  }

  & div:first-child {
    @media ${props => props.theme.media.tablet} { 
      display:flex;
      justify-content: space-between;
    }

    & h2 {
      margin-bottom: 4rem;
    }

    & select {
      width:100%;
      margin-bottom: 3rem;
      @media ${props => props.theme.media.tablet} { 
        width:30%;
      }
    }
  }

 
     
` 

export const InfoBox = styled.div<IEventsTypes>`

    display:  ${props => props.view ? "block" : "none"};
    margin-bottom: 2rem;
    text-align: left;
    @media ${props => props.theme.media.laptop} { 
        display:flex;
        flex-direction: column;
        margin-top: 10rem;
        background: ${props => props.theme.color.primary};
        padding:5rem 4rem 15rem 4rem;
        height: fit-content;
        clip-path: polygon(6% 6%, 100% 0, 98% 70%, 75% 75%, 44% 99%, 50% 75%, 4% 81%);
    }
    & h3 {
      color:${props => props.theme.color.gray};
      @media ${props => props.theme.media.laptop} { 
        color:${props => props.theme.color.white};
      }
    }
    & caption {
      color:${props => props.theme.color.grayLight};
      display:block;
      text-align: left;
      padding: .5rem 0rem 1.5rem 0rem;
      @media ${props => props.theme.media.laptop} { 
        color:${props => props.theme.color.white};
      }
    }
    & p {
      line-height: 2rem;
      color:${props => props.theme.color.blackLight};
      @media ${props => props.theme.media.laptop} { 
        color:${props => props.theme.color.white};
      }
    }
     
` 














 

 





