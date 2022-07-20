export interface HeroData{
  map(arg0: (hero: HeroData) => JSX.Element): import("react").ReactNode;
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
  thumbnail?: {path: string},
  children?: JSX.Element|JSX.Element[];
}
export interface ComicElement {
  id:                 string;
  digitalId:          string;
  title:              string;
  issueNumber:        string;
  variantDescription: string;
  description:        string;
  modified:           string;
  isbn:               string;
  upc:                string;
  diamondCode:        string;
  ean:                string;
  issn:               string;
  format:             string;
  pageCount:          string;
  resourceURI:        string;
  urls:               URL[];
  series:  {
    resourceURI: string,
    name: string
  },    
  thumbnail: {
    path: string,
    extension: string
  },
  images: [
    {
      path: string,
      extension: string
    }
  ]
}