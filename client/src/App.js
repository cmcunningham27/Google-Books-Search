import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components/Nav/Index';
import Header from './components/Header/Header';
import Saved from './pages/Saved';
import Search from './pages/Search';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Index />
      <Header />
      <Switch>
        <Route exact path='/saved'>
          {Saved}
        </Route>
        <Route exact path='/'>
          {Search}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
