import styled, {css} from "styled-components";


interface IChapterTypes {
  chapterTitle?: boolean,
  bookmark?:boolean,
  chapterNav?:boolean,
  chapterPages?:boolean,
  chapterOption?:boolean,
  chapterComments?:boolean,
  titles?:boolean,
  mobile?:boolean,
  desktop?:boolean,
  
}



export const Container = styled.div<IChapterTypes>`
  @media ${props => props.theme.media.laptop} { 
    width: 80rem;
    margin: auto;
 
  }
`


export const Div = styled.div<IChapterTypes>`

  ${({bookmark}) => bookmark && 
    css`
      opacity: 0.8; 
  `}; 

  
  ${({titles}) => titles && 
    css`
      opacity: 0.8; 
  `}; 

  ${({chapterTitle}) => chapterTitle && 
    css`
      display: flex;
      justify-content: space-between;
      padding:2rem 1rem 4rem 1rem;
      & h2:first-child{
        margin-bottom: .5rem;
      }

      & p:last-child{
        color: ${props => props.theme.color.gray}; 
      }
  `}; 

  ${({chapterPages}) => chapterPages && 
    css`
      display: flex;
      flex-direction:column;
      align-items:center
     
  `}; 


  ${({chapterNav}) => chapterNav && 
    css`
      padding: 2rem 1rem 4rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items:center;

      & div:first-child > * {
        margin-right: 2rem;
      }

      & div:last-child  {
        display: flex;
        align-items:center;
        margin-right: -1rem;
      }
  `}; 

  ${({ chapterOption}) =>  chapterOption && 
    css`
      & h2:first-child {
        padding 1rem;
        background: ${props => props.theme.color.blackLight}; 
        color: ${props => props.theme.color.white}; 
      }
  `}; 

  ${({ mobile }) =>  mobile && 
    css`
      display: flex;
      @media ${props => props.theme.media.laptop} { 
        display: none;
      }
  `}; 

  ${({ desktop}) =>  desktop && 
    css`
      display: none;
      @media ${props => props.theme.media.laptop} { 
        display: block;
      }
  `}; 

  ${({ chapterComments}) =>  chapterComments && 
    css`

      & h2:first-child {
        padding 1rem;
        background: ${props => props.theme.color.blackLight}; 
        color: ${props => props.theme.color.white}; 
      }

  `}; 

`


      

