export interface newComArr {
  thumb: string,
  genre: string,
  likes: number,
}

export interface newComicsTypes {
  handleButtons: (name: string) => void,
  newComArr: newComArr[],
}