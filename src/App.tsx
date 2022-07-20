
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Heroes } from "./components/pages/heroes";
import { Heroe } from "./components/pages/heroe";
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
          <Route path="/heroe" element={<Heroe />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter></>

  );
}

