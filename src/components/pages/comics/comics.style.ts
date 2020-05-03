import styled, {css} from "styled-components";

interface IComicsTypes {
  comicsList?:boolean,
  genre?:boolean,
  genres?:boolean,
  active?:boolean,
  info?:boolean,
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
          width:70rem;
          margin: auto;
         
  }

  ${({comicsList}) => comicsList && 
    css`
      /* text-align: center;
      display:flex;
      margin: auto;
      margin-top: 1rem;
      margin-bottom: 4rem; */
      display: grid;
     
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
          margin-left: 2rem;
          font-size: 1.6rem;
          color: ${props => props.theme.color.grayLight};
        }
      }
     
  `}; 

`

export const Ul = styled.ul<IComicsTypes>`
  /* padding-left: 1rem;
  padding-right: 1rem; */
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
      color: ${props => props.active ? props.theme.color.black : props.theme.color.gray};

  `; 


      
// color: ${props => props.acti ? props.theme.color.primaryLight : props.theme.color.primary};

