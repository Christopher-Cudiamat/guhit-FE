import styled, {css} from "styled-components";

interface IPublishTypes {
  history?:boolean,
  team?:boolean,
  bannerContainer?:boolean,
  image?:string,
  dropdown?:boolean,
  missionVision?: boolean,
  media?: boolean,
  publishOption?:boolean,
  monetization?:boolean,
  community?:boolean,
  submit?:boolean,
  studio?:boolean,
  nav?: boolean,
  active?: boolean,
}

export const Container = styled.div<IPublishTypes>`
 
`
export const Div = styled.div<IPublishTypes>`
  display: flex;
  justify-content: space-around;

  ${({bannerContainer}) => bannerContainer && 
    css`
      margin-top: -1px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow-x:hidden;
     
      & p:first-child  {
        margin-bottom: 1.6rem;
      }

      & p:nth-child(2)  {
        margin-bottom: 4.6rem;
        width: 50%;
        align-self: center;
        line-height: 2.4rem;
        font-weight: 100;
      }

      & button:last-child {
        width: 25%;
        height: 7rem;
       font-size: 2.6rem;
        align-self: center;
        border-radius: 4rem;
      } 
  `};

  ${({nav}) => nav && 
    css`
      position: sticky;
      top: 0;
      border-bottom: 1px solid ${props => props.theme.color.gray};
      padding: 0rem;
      margin-top: -1px;
      background:white !important;
      z-index: 888;
     
      & ul  {
        font-size: 1.8rem;
        font-weight: 600;
        display: flex;
        justify-content: space-around;
      }

      & ul a {
        margin: 0rem 2rem; 
        padding: 2rem 0rem 1.5rem 0rem;
        cursor:pointer;
      }
  `}; 

  ${({monetization}) => monetization && 
    css`
      padding: 10rem;
      background: white; 
      justify-content: space-evenly;
      align-items: center;
  

      & div:first-child {
        padding: 1rem;
        width: 33%;
        font-size: 1.8rem;
        line-height: 2.4rem;
        color:${props => props.theme.color.gray}; 
        
      }

      & div:last-child {

        & p:nth-child(2) {
          font-size: 2rem;
        }

        & div {
          display: flex;
          padding: 2rem;
          background: ${props => props.theme.color.grayLightest}; 
          color: ${props => props.theme.color.blackLight}; 
          border:   ${props => props.active ? `2px solid red` : "none"}; 
          margin-bottom: 1rem;
          margin-top: 1rem;
          font-size: 1.8rem;
          font-weight: 600;
          border-radius: 1rem;
          
          cursor: pointer;
          
          &:hover{
            background: ${props => props.theme.color.grayLight}; 
          }
          & p {
            margin-left: 1rem;
          }
        }
      }
  `}; 

  ${({community}) => community && 
    css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 10rem;
      background:${props => props.theme.color.grayLightest}; 
  
      & div:first-child {
        font-size: 2rem;
        width: 33%;
        line-height: 2.4rem;
        & p {
          color:${props => props.theme.color.gray}; 
        }
      }

      & div:last-child {
        background: yellow;
        padding: 1rem;
        width: 400px;
        height: 400px;
      }
  `}; 

  ${({studio}) => studio && 
    css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 10rem; 

      & div:first-child {
        background: yellow;
        padding: 1rem;
        width: 400px;
        height: 400px;
      }

      & div:last-child {
        font-size: 2rem;
        width: 33%;
        line-height: 2.4rem;
        & p {
          color:${props => props.theme.color.gray}; 
        }
      }
  `}; 
 

  ${({submit}) => submit && 
    css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 10rem; 
      background:${props => props.theme.color.grayLightest}; 

      & div:first-child {
        font-size: 2rem;
        width: 33%;
        line-height: 2.4rem;
        & p {
          color:${props => props.theme.color.gray}; 
        }
      }

      & div:last-child {
        background: yellow;
        padding: 1rem;
        width: 400px;
        height: 400px;
      }
  `}; 

  ${({publishOption}) => publishOption && 
    css`
      overflow-x: hidden;

      & div {
        width: 100%;
      }
   
      & div > div {
        flex-direction: row;
        display:flex;
        justify-content: center;
      }

      & div a  button {
        margin: 8rem;
       height: 7rem;
       font-size: 2.6rem;
       border-radius: 4rem;
       cursor: pointer;
       &:hover {
        background: ${props => props.theme.color.secondaryDark}; 
         transform: translateY(-10%) scale(1.1);
         transition: all .3s;
       }
      }
      
  `}; 

`







