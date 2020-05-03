import styled, {css} from "styled-components";

interface ILibraryTypes {
  library?: boolean,
  libraryList?: boolean,
  libraryLinks?: boolean,
}

export const Container = styled.div<ILibraryTypes>`
width: 100%;

     
  @media ${props => props.theme.media.laptop} { 
    width: 100%;
    max-width: 40rem;
  }
`

 
export const Div = styled.div<ILibraryTypes>`
background: ${props => props.theme.color.white};
color: ${props => props.theme.color.black};
margin-right: 0rem;
 
  ${({library}) => library&&
    css`
      display: flex;
      flex-direction:column;
      background: ${props => props.theme.color.grayLightest};
      border-bottom: 1px solid #ccc;
      padding: 1rem 1.5rem;
      & p {
        font-size: 2.4rem;
        font-weight: bold;
      }
      & select {
        margin-top:.5rem;
        padding: .5rem 1rem .5rem 0rem;
        border-radius: .5rem;
        border: none;
        outline: none;
        font-size:1.6rem;
        width: 20%;
        background: ${props => props.theme.color.grayLight};
      }
      @media ${props => props.theme.media.laptop} { 
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    } 
    `
  };

  ${({libraryList}) => libraryList &&
    css`
      padding: 4rem 1.5rem;
      text-align: center;
      
      color: ${props => props.theme.color.gray};
      border-bottom: 1px solid #ccc;
      letter-spacing: 1px;
    } 
    `
  };

  
  ${({libraryLinks}) => libraryLinks&&
    css`
      padding: 1.5rem 1.5rem;
      @media ${props => props.theme.media.laptop} { 
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0px 15px 10px -15px #a8a8a8;  
      }
    } 
    `
  };
  

`




