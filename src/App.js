import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Navbarcomp from './components/navbar/Navbarcomp';
import Detaildf from './modals/detaildf/Detaildf';

function App() {
  return (

    <>
    
        <BrowserRouter>
          <Navbarcomp/>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/detaildf/:id" exact component={Detaildf} />

        </Switch>
        
        </BrowserRouter>

    
    </>
    
  );
}

export default App;
