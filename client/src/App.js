import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Saved from './pages/Saved';
import SearchBooks from './pages/SearchBooks';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Switch>
        <Route exact path='/saved' component={Saved}/>
          {/* <Saved />
        </Route> */}
        <Route exact path='/'>
          <SearchBooks />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
