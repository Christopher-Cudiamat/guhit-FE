import styled from "styled-components";
import map from '../../../images/contacts/map.jpg';


interface IContactsTypes {

}


export const Div = styled.div<IContactsTypes>`

  text-align: center;
  margin: auto;


 & div{
    height:80vh;
    background: url(${map});
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
    position: relative;


    & ul:last-child{
      padding: 1rem 2rem 1rem  2rem ;
      position: absolute;
      bottom: 0%;
      background:rgba(250,250,250, 0.9);
      width: 100%;
      text-align: left;
      font-size: 1.6rem;
      border-radius: 10px;

      @media ${props => props.theme.media.laptop} { 
        width: 50rem;
        bottom: -19%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      & li:first-child {
        padding-bottom: 1.5rem;

        & h2 {
          font-size:30px;
        }
      }

      & * {
        display: flex;
        padding-bottom: .5rem;
      }
    }
  }


`






