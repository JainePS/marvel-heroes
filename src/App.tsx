
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Heroes } from "./components/pages/heroes";
import { Hero } from "./components/pages/hero";
import { Search } from "./components/pages/search";
import { NavBarApp } from "./components/navBar";

import "./App.css";


export default function App() {
  return (
    <>
    <NavBarApp></NavBarApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heroes />}></Route>
          <Route path="/heroe/:heroID" element={<Hero />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter></>

  );
}

