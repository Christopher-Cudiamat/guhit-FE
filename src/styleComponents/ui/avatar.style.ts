import styled, {css} from "styled-components";


interface IAvatarTypes {
  height?: string,
  width?: string,
}


export const Avatar = styled.img<IAvatarTypes>`
border-radius: 50%;
`