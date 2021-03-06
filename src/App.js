import { Container } from '@material-ui/core';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';

//import pages

import Trending from './pages/Trending/Trending';
import Series from './pages/Series/Series';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';



function App() {
  return (
    <BrowserRouter>
     <Header/>
    <div className='app'>
      <Container>
         <Switch>
           <Route path='/' exact component={Trending}/>
           <Route path='/movies' component={Movies}/>
           <Route path='/series' component={Series}/>
           <Route path='/search' component={Search}/>
         </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
