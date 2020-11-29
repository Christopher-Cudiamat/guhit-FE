import { IImageUploadType } from '../publishCreatorInfo.type';

export interface ButtonCreatorInfoType {
  token:string,
  creatorsData: creatorData | {},
  isCreator:boolean,
  sendButton:boolean,
  setCreatorProfile: (data:any) => void,
}

interface creatorData {
  profilePic: IImageUploadType[] | File,
  displayName: string,
  city: string,
  description: string,
  patreon: string,
  tools: sttring[],
}