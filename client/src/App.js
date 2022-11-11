import React, { useEffect } from "react";
import "./styles/index.scss"
import { Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import Search from "./components/search";
import Detail from "./components/detail";
import { useDispatch } from "react-redux";
import Favorites from "./components/favorites";


function App() {
    var dispatch = useDispatch()
    useEffect(() => {
      if(localStorage.user) dispatch({type:"LOGUEADO"})
    },[])
  return (
    <div className="app">
        <Route exact path={"/"}>
          <Nav/>
          <Home/>
        </Route>
        <Route path={"/search"}>
          <Nav/>
          <Search/>
        </Route>
        <Route path={"/favorites"}>
          <Nav/>
          <Favorites/>
        </Route>
        <Route path={"/detail/:id"}>
          <Detail/>
        </Route>
    </div>
  );
}

export default App;
