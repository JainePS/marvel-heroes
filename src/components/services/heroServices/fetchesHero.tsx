import axios from "axios";
import md5 from "md5";

export function FetchHeroID(heroID: string) {

  const baseUrl: string = `http://gateway.marvel.com/v1/public/characters/${heroID}`;
  const publicKey: string = "54c7ee2a64d3e7b7ec048518a1343a81";
  const privateKey: string = "3c3c950fefa0b393f92d52e6fd77be1a36a584da";
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const heroId: any = axios.get(`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`);

  return heroId;
}
export function FetchHeroComics(heroID: string) {

  const baseUrl: string = `http://gateway.marvel.com/v1/public/characters/${heroID}/comics`;
  const publicKey: string = "54c7ee2a64d3e7b7ec048518a1343a81";
  const privateKey: string = "3c3c950fefa0b393f92d52e6fd77be1a36a584da";
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const heroComics: any = axios.get(`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`);

  return heroComics;
}
export function FetchHeroStories(heroID: string) {

  const baseUrl: string = `http://gateway.marvel.com/v1/public/characters/${heroID}/stories`;
  const publicKey: string = "54c7ee2a64d3e7b7ec048518a1343a81";
  const privateKey: string = "3c3c950fefa0b393f92d52e6fd77be1a36a584da";
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const heroStories: any = axios.get(`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`);

  return heroStories;
}
export function FetchHeroEvents(heroID: string) {

  const baseUrl: string = `http://gateway.marvel.com/v1/public/characters/${heroID}/events`;
  const publicKey: string = "54c7ee2a64d3e7b7ec048518a1343a81";
  const privateKey: string = "3c3c950fefa0b393f92d52e6fd77be1a36a584da";
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const heroEvents: any = axios.get(`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`);

  return heroEvents;
}