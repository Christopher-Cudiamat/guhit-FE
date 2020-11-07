import styled, {css} from "styled-components";


interface IChapterTypes {
  chapterNav?:boolean,
}


export const Form = styled.form<IChapterTypes>`


  ${({chapterNav}) => chapterNav && 
    css`
      padding: 1rem 1rem 4rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items:center;

      @media ${props => props.theme.media.tablet} { 
        justify-content: space-around;
      }

      & select {
        margin: 0rem 2rem;
        font-size: 1.2rem;
        height: 3.5rem;
        width: 40%;
        @media ${props => props.theme.media.tablet} { 
          height: 4rem;
          font-size: 1.6rem;
        }
      }

      & button {
        padding: .5rem;
        height: 3.5rem;
        width: 20%;
        font-size: 1.2rem;
        @media ${props => props.theme.media.tablet} { 
          height: 4rem;
          width: 10%;
          font-size: 1.6rem;
        }
      }
  `}; 

`


      

