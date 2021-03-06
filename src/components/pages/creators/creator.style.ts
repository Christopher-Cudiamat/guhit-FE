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

  @media ${props => props.theme.media.tablet} { 
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
  font-size: 1.6rem;
  color:  ${props => props.theme.color.gray};

  & h4 {
    font-size: 1.8rem;
    color:  ${props => props.theme.color.blackLight};
    margin-bottom: 1rem;
    @media ${props => props.theme.media.tablet} { 
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
    }
  }

  & p:nth-child(3) {
    margin-bottom: .5rem;
    margin-top: .5rem;
  }

  & div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media ${props => props.theme.media.tablet} { 
      justify-content: center;
    }

    & p:first-child {
      font-weight: 400;
      font-size: 1.6rem;
      color:  ${props => props.theme.color.gray};
      margin-right: .5rem;
    }
    & svg {
      font-size: 1.6rem;
      color:  lightblue;
    }

   
  }
`

export const Div = styled.div<ICreatorType>`
  position: relative;
  margin-bottom: 5rem;

  ${({container}) => container && 
    css`
     @media ${props => props.theme.media.tablet} { 
      max-width: 90rem;
      margin: auto;
    }
  `}; 

  ${({cardContainer}) => cardContainer &&
    css`  
      max-width: 80rem;
      margin: auto;
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

`


      


