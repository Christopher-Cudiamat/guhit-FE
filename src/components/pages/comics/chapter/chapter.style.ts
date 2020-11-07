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
  top?:boolean,
}



export const Container = styled.div<IChapterTypes>`
  @media ${props => props.theme.media.laptop} { 
    width: 80rem;
    margin: auto;
    position: relative;
  }
`


export const Div = styled.div<IChapterTypes>`

  ${({top}) => top && 
    css`
      position: fixed;
      bottom: 5%;
      right:3%;
      border-radius: 50%;
      padding: 1rem;
      background: ${props => props.theme.color.white};
      width: 2rem;
      height: 2rem;

      @media ${props => props.theme.media.laptop} { 
        width: 4rem;
        height: 4rem;
        bottom: 10%;

        &:hover {
          cursor:pointer;
        }
      }

      & svg {
        color: ${props => props.theme.color.primary};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 4rem;
        height: 4rem;
        
        @media ${props => props.theme.media.laptop} { 
          width: 4rem;
          height: 4rem;
        }
      }
  `};

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
      padding:2rem 1rem 2rem 1rem;
      & h2:first-child{
        margin-bottom: .5rem;
      }

      & h4:last-child{
        color: ${props => props.theme.color.primary}; 
        cursor: pointer;
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


      

