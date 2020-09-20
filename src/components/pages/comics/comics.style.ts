import styled, {css} from "styled-components";

interface IComicsTypes {
  comicsList?:boolean,
  genre?:boolean,
  genres?:boolean,
  active?:boolean,
  info?:boolean,
  inputBox?:boolean,
  noResult?:boolean
}

export const Captions = styled.div<IComicsTypes>`
  justify-content: space-between;
  padding: 1rem;
  display: flex;
  font-size: 1.4rem;
  color:  ${props => props.theme.color.gray};

`

export const Div = styled.div<IComicsTypes>`
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${props => props.theme.media.laptop} { 
    width:90rem;
    margin: auto; 
  }

  ${({comicsList}) => comicsList && 
    css`
      /* display: grid; */
      padding-bottom: 5rem;
      @media ${props => props.theme.media.laptop} { 
        padding-bottom: 10rem;
      }
  `}; 

  ${({info}) => info && 
    css`
      margin-top: 4rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;

      @media ${props => props.theme.media.laptop} { 
        margin-top: 4rem;
        margin-bottom: 3rem;
      }

      & div:first-child{
       
        & > p {
          font-size: 1.8rem;
          color: ${props => props.theme.color.gray};
        }
      }
      
      & div:last-child{
        display: flex;
        & > * {

          font-size: 1.6rem;
          margin-top: 1rem;
          color: ${props => props.theme.color.grayLight};
        }
      }
     
  `};  

  ${({noResult}) => noResult && 
    css`
    margin-top: 15rem;
    margin-bottom: 20rem;
    text-align: center;
    & h3 {
      color:  ${props => props.theme.color.gray};
    }
     
  `}; 

`

export const Ul = styled.ul<IComicsTypes>`
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${({genre}) => genre && 
    css`
      background:#eee;
      display: flex;
      flex-wrap: wrap; */
      justify-content: space-around;
      width: 100%;
      margin-top: -2px;
      text-align: center;
      justify-content: center;

      @media ${props => props.theme.media.laptop} { 
        width: 50rem;
        margin: auto;
        border-radius: 1rem;
        margin-top: -8px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.10);
      }
     
  `}; 
`


export const List = styled.li<IComicsTypes>`

      padding: 1rem .5rem;
      width: 30%;
      font-size: ${props => props.active ? "1.6rem" : "1.4rem"};
      font-weight: ${props => props.active ? "500" : "400"};
      color: ${props => props.active ? props.theme.color.white : props.theme.color.blackLight};
      background: ${props => props.active ? props.theme.color.secondary : "none"};
      border-radius: ${props => props.active ? "2rem" : "0rem"};

      @media ${props => props.theme.media.laptop} { 
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
  `; 


      
// color: ${props => props.acti ? props.theme.color.primaryLight : props.theme.color.primary};

