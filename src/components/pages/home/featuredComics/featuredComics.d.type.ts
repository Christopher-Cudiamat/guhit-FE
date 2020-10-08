export interface featComArrTypes {
  thumb: string,
  genre: string,
  likes: number,
}

export interface featuredComicsTypes {
  handleButtons: (name: string) => void,
  featComArr: featComArrTypes[],
}