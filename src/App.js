import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home/Homepage';
import Detaildf from './modals/detaildf/Detaildf';
import Clientpages from './pages/client/homeclient/Clientpages';
import DetailProduct from './pages/client/detailpage/DetailProduct'
import PrivateRoute from './pages/PrivateRoute';
import Profileuser from './pages/client/profilpage/Profileuser';

function App() {

  return (

    <>
        <BrowserRouter>
   
        <Switch>

          <Route path="/" exact component={Homepage} />
          <Route path="/detaildf/:id" exact component={Detaildf} />
         <PrivateRoute exact path='/client' component={Clientpages}/>
         <PrivateRoute exact path="/client/profile"  component={Profileuser} />
         <PrivateRoute exact path="/client/detailc/:id" component={DetailProduct} />
        </Switch>
         
        </BrowserRouter>

    </>
    
  );
}

export default App;
