import styled from "styled-components";

interface ICheckTypes {
  size?: string,
  height?: string,
  width?: string,
}

export const CheckBox = styled.input.attrs<ICheckTypes>(props => ({
  type: "checkbox",
  }))`

    width: 2rem;
    height: 2rem;
    border-radius: 10px;
  
  `


