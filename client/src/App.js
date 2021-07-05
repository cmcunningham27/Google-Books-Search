import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import SavedBooks from './pages/SavedBooks';
import SearchBooks from './pages/SearchBooks';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Switch>
        <Route exact path='/saved' component={SavedBooks}/>
        <Route exact path='/' component={SearchBooks}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
