import styled, {css} from "styled-components";

interface ICreatorType {
  container?:boolean,
  cardContainer?:boolean,
  comicsList?:boolean,
  genre?:boolean,
  genres?:boolean,
  active?:boolean,
  info?:boolean,
  name?:boolean,
  searchNameBox?:boolean,
  inputBox?: boolean,
  noResult?: boolean,
  hideShadow?: boolean,
}


export const Info = styled.div<ICreatorType>`
  padding: 4rem 2rem;
  box-shadow: ${props => props.hideShadow ? "0 0px 0px rgba(0, 0, 0, 0)" : "0 2px 3px rgba(182, 182, 182, 0.35)"};
  margin-bottom: 0rem;

  @media ${props => props.theme.media.laptop} { 
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
  }

  & p:last-child {
    color: ${props => props.theme.color.gray};
  }
`

export const Captions = styled.div<ICreatorType>`
  justify-content: space-between;
  padding: 1rem;
  display: flex;
  font-size: 1.4rem;
  color:  ${props => props.theme.color.gray};

  & p:nth-child(2) {
    margin-bottom: .5rem;
  }
`

export const Div = styled.div<ICreatorType>`
  position: relative;
  margin-bottom: 5rem;

  ${({container}) => container && 
    css`
     @media ${props => props.theme.media.laptop} { 
      max-width: 80rem;
      margin: auto;
    }
  `}; 

  ${({cardContainer}) => cardContainer &&
    css`  
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    `
  };

  ${({comicsList}) => comicsList && 
    css`
      
     
  `}; 
  

  ${({noResult}) => noResult && 
    css`
    margin-top: 15rem;
    margin-bottom: 20rem;
    & h3 {
      color:  ${props => props.theme.color.gray};
    }
     
  `}; 

  ${({searchNameBox}) => searchNameBox && 
    css`
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

`


      


