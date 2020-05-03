import styled, {css} from "styled-components";


interface ICommentTypes {
  container?: boolean,
  comment?: boolean,
  reply?: boolean,
}


export const Div = styled.div<ICommentTypes>`
  padding: 0rem 1rem;


  ${({container}) => container && 
    css`
    border-bottom: 1px solid rgba(0,0,0,0.3);
    padding: 1.5rem 1rem 1rem 1rem;
     
  `}; 

  ${({comment}) => comment && 
    css`
      
      padding: 2rem 0rem;
      display: flex;
      flex-direction: column;
     

      & div:first-child{
        display:flex;

        & div:first-child > * {
          border-radius: 50%;
          width: 5rem;
          height: 5rem;
          margin-right: 1rem;
        }
        & div:last-child {
          display: flex;
          flex-direction: column;
          font-size: 1.6rem;
          line-height: 1.8rem;

          & p:first-child {
            font-weight: 700;
            color: ${props =>  props.theme.color.blackLight};
          }
          & p:last-child {
            color: ${props =>  props.theme.color.grayLight};
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 1.6rem;
          }
        }
      }
      & div:nth-child(2){
        margin-top: .7rem;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: ${props =>  props.theme.color.gray};
        
      }

      & div:last-child{
        margin-top: .7rem;
        margin-bottom: .7rem;
        display: flex;
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-weight: 700;
        color: ${props =>  props.theme.color.grayLight};
        & > p {
          padding-right: 1rem;
        }

      }
     
     
  `}; 




  ${({reply}) => reply && 
    css`
      padding: 1rem 0rem;
      display: flex;
      flex-direction: column;
      width: 92%;
      align-self: flex-end;
      margin-left: 8%;

      & div:first-child{
        display:flex;

        
        & div:first-child > * {
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          margin-right: 1rem;
        }
        & div:last-child {
          display: flex;
          flex-direction: column;
          font-size: 1.6rem;
          line-height: 1.6rem;

          & p:first-child {
            font-weight: 700;
            color: ${props =>  props.theme.color.blackLight};
          }
          & p:last-child {
            color: ${props =>  props.theme.color.grayLight};
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 1.6rem;
          }
        }
      }

      & div:nth-child(2){
        margin-top: .7rem;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: ${props =>  props.theme.color.gray};
        
      }

      & div:nth-child(3){
        margin-top: .7rem;
        margin-bottom: .7rem;
        display: flex;
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-weight: 700;
        color: ${props =>  props.theme.color.grayLight};
        & > p {
          padding-right: 1rem;
        }

      }

      & div:last-child{
        margin-top: .7rem;
        margin-bottom: .7rem;
        display: flex;
        font-size: 1.8rem;
        line-height: 1.6rem;
        font-weight: 700;
        color: ${props =>  props.theme.color.grayLight};
        & > p {
          padding-right: 1rem;
        }

      }
     
  `}; 


`


