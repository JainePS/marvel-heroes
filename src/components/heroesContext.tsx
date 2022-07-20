import { createContext, useEffect, useState } from 'react';
import { HeroeData } from './interfaces';
import { APIRequest } from './services/APIrequestService';

type PropsHeroesContext = {
  heroes: HeroeData[],
  setHeroes: React.Dispatch<React.SetStateAction<HeroeData>> 
}

const DEFAULT_VALUE = {
  comics: {
    available:0,
    collectionURI: "",
    returned:0},
  description: "",
  events: {
    available:0,
    collectionURI: "",
    returned:0},
  id:0,
  modified: "",
  name: "",
  resourceURI: "",
  series: {available:0, collectionURI: "", returned:0},
  stories: {available:0, collectionURI:"", returned:0},
  thumbnail: {path: ""},
  setState: ()=> {},
};
const HeroesCtx = createContext<PropsHeroesContext>(DEFAULT_VALUE);

export function HeroesContext() {
  const [heroes, setHeroes] = useState<DEFAULT_VALUE.state>();

  useEffect(() => {
    const fetchHeroes = () => {
      APIRequest()
      .then((result: { data: { data: { results: HeroeData[]; }; }; }) => {
        setHeroes(result.data.data.results);
      })
      .catch((err: string) => {
        console.log(err);
      });
    };
    fetchHeroes();
  }, []);

  return (
    <HeroesCtx.Provider
      value={{
        heroes,
        setHeroes
      }}></HeroesCtx.Provider>
  );

}
const HeroeCtx = createContext<HeroeData[] | null>(null);

export const HeroeContext = ()=>{
  const [heroe, setHeroe] = useState<HeroeData[]>();
useEffect(() => {
  APIRequest()
         .then((result: { data: { data: { results: {id: HeroeData[]}}; }; }) => {
           setHeroe(result.data.data.results.id);
         })
         .catch((err: string) => { 
           console.log(err)  
         })
 }, [])  
 console.log(heroe);
 return(
  <HeroeCtx.Provider></HeroeCtx.Provider>
 )
  
}