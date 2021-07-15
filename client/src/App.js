import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import SavedBooks from './pages/SavedBooks';
import SearchBooks from './pages/SearchBooks';
import Footer from './components/Footer';
import "./App.css";

//Uses BrowserRouter to Switch through pages, and renders a nav bar, header, and footer on both pages
function App() {
  return (
    <BrowserRouter className='app'>
      <Nav />
      <Header />
      <Switch>
        <Route exact path='/saved' component={SavedBooks}/>
        <Route exact path='/' component={SearchBooks}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
