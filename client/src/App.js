import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Saved from './pages/Saved';
import Search from './pages/Search';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
