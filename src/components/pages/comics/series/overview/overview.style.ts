import styled, {css} from "styled-components";

interface IStyleTypes {
  small?:boolean,
}


export const Avatar = styled.img<IStyleTypes>`
  border-radius:50%;
  width: ${props => props.small ? "4rem" : "8rem"};
  height: ${props => props.small ? "4rem" : "8rem"};
  margin: auto;
  margin-top: ${props => props.small ? "0rem" : "3rem"};
  margin-bottom: ${props => props.small ? "0rem" : "1rem"};
  text-align: center;
  display: block;

`
export const Support = styled.button<IStyleTypes>`
  line-height: 2rem;
  font-size: 1.6rem;
  color: ${props => props.theme.color.primary};
  border-radius: 10px;
  border: 1px solid  ${props => props.theme.color.primary};
  padding: 1rem 0rem;
`
