import styled, {css} from "styled-components";

interface IUlTypes {
  upperFooter?:boolean,
  lowerFooter?:boolean, 
  socialFooter?:boolean, 
  social?:boolean,
}
interface IListTypes { 
  social?:boolean,
}

export const Div = styled.div` 
  background: ${props => props.theme.color.primaryLight};

`



export const Ul = styled.ul<IUlTypes>`
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.media.laptop} { 
    flex-direction: row;
    justify-content: center;
  }


  ${({socialFooter}) => socialFooter &&
    css`
 
      justify-content: center;
      display: flex;
      flex-direction: row; 
      margin-bottom: 2rem;
      @media ${props => props.theme.media.laptop} { 
        margin-bottom: 4rem;
          & a:hover {
            opacity: 0.7;
            transform: opacity .4s;
          }
        }
      }

    `
  };

  ${({upperFooter}) => upperFooter &&
    css`
      font-size: 1rem;
      font-weight: 500;
      color: ${props => props.theme.color.primaryDark};
      text-align:center;
      padding: 2rem 1rem 2rem 1rem;
  
      & a{
        font-size: 1.6rem;
        font-weight:700;
        margin-left: 1.5rem;
        margin-right:1.5rem;

        @media ${props => props.theme.media.laptop} { 
          font-size: 1.4rem;
          &:hover {
            opacity: 0.7;
            transform: opacity .4s;
          }
        }
      }

     
    `
  };

  ${({lowerFooter}) => lowerFooter &&
    css`
      display: flex; 
      flex-direction: row; 
      justify-content:center;
      background: ${props => props.theme.color.primary};
      padding: 2rem 0rem;
      & a{
        font-size: 1.2rem;
        opacity: 1;
        @media ${props => props.theme.media.tablet} { 
          font-size: 1.4rem;
        }
      }

      & li{
        margin:0rem .8rem 0rem .8rem;

        @media ${props => props.theme.media.tablet} { 
          margin:0rem;
          opacity: 0.8;
        }
        
      }

      & li::before {
        @media ${props => props.theme.media.tablet} { 
          content: "-";
          margin:0rem 2rem 0rem 2rem;
          font-size: 1.4rem;
        }
      }

      & li:first-child::before{
        @media ${props => props.theme.media.tablet} { 
          content: "";
          margin:0rem;
        }
      }
      
    `
  };
`


export const List = styled.li<IListTypes>`
  margin-bottom: 2rem;

  ${({social}) => social &&
    css`
      margin: 0rem 1rem 0rem 1rem;
    `
  };

`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding-top: 5rem;
  & img {
    opacity: 0.5;
    @media ${props => props.theme.media.laptop} { 
      width: 5rem;
      height:auto
    }
  }
  & p {
    padding: .5rem 0rem 0rem .5rem;
    opacity: 0.5;
    color: ${props => props.theme.color.black};
    font-size:5rem;
    font-weight: bold;
    font-style: italic;
    @media ${props => props.theme.media.laptop} { 
      font-size:6rem;
    }
  }
`

