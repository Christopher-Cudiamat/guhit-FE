import styled, {css} from "styled-components";

interface ICreatorType {
  comicsList?:boolean,
  genre?:boolean,
  genres?:boolean,
  active?:boolean,
  info?:boolean,
  name?:boolean,
  searchNameBox?:boolean,
  inputBox?: boolean,
}

export const Captions = styled.div<ICreatorType>`
  justify-content: space-between;
  padding: 1rem;
  display: flex;
  font-size: 1.4rem;
  color:  ${props => props.theme.color.gray};

`

export const Div = styled.div<ICreatorType>`
position: relative;
  /* padding-left: 2rem;
  padding-right: 2rem; */


  ${({comicsList}) => comicsList && 
    css`
      text-align: center;
      display:flex;
      margin: auto;
      margin-top: 1rem;
      margin-bottom: 4rem;
     
  `}; 

  ${({searchNameBox}) => searchNameBox && 
    css`
      /* text-align: center; */
      position:absolute;
      right:0%;
      top:0%;
      height: 5rem;
      margin: auto;
      z-index:100;
      font-size: 1.4rem;
      background: ${props =>  props.theme.color.primary};
      color: ${props =>  props.theme.color.primaryDark};
      box-shadow: 2px -1px 9px #232931;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 700;
  `}; 

  ${({inputBox}) => inputBox && 
    css`
      padding: 2rem 2rem;
      background: ${props =>  props.theme.color.white}; 
      & p:first-child{

        color: ${props =>  props.theme.primary}; 
        font-size: 1.4rem;
        margin-bottom: .5rem;
      }   
  `}; 

  ${({info}) => info && 
    css`
      margin-top: 4rem;
      padding: 0rem 2rem;
     
  `}; 
`


export const Ul = styled.ul<ICreatorType>`
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${({name}) => name && 
    css`
      background:#eee;
      width: 100%;
     
     
  `}; 
`

export const List = styled.li<ICreatorType>`

      padding: 1rem .5rem;
      width: 30%;
      font-size: ${props => props.active ? "1.6rem" : "1.4rem"};
      font-weight: ${props => props.active ? "500" : "400"};
      color: ${props => props.active ? props.theme.color.black : props.theme.color.grayLight};

  `; 


      
// color: ${props => props.acti ? props.theme.color.primaryLight : props.theme.color.primary};

