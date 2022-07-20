export interface HeroeData{
  comics: {
    available?: number,
    collectionURI?: string,
    returned?: number}
  description: string;
  events?: {
    available?: number,
    collectionURI?: string,
    returned?: number};
  id: number;
  modified: string;
  name: string;
  resourceURI?: string;
  series?: {available: number, collectionURI: string, returned: number}
  stories?: {available:number, collectionURI:string, returned: number}
  thumbnail?: {path: string}
}