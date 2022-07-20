import axios from "axios";
import md5 from "md5";

const baseUrl: string = "http://gateway.marvel.com/v1/public/characters";
const publicKey: string = "54c7ee2a64d3e7b7ec048518a1343a81";
const privateKey: string = "3c3c950fefa0b393f92d52e6fd77be1a36a584da";
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export function FetchHeroes() {
 
  const APIdata: any = axios.get(`${baseUrl}?ts=${time}&apikey=${publicKey}&hash=${hash}`);
 
  return APIdata;
}