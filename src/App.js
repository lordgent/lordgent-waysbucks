import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import Detaildf from './modals/detaildf/Detaildf';
import Clientpages from './pages/client/homeclient/Clientpages';
import PrivateRoute from './PrivateRoute';
import DetailProduct from './pages/client/detailpage/DetailProduct'

function App() {
  return (

    <>
    
        <BrowserRouter>
   
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/detaildf/:id" exact component={Detaildf} />
          <Route path="/client/detailc/:id" exact component={DetailProduct} />
          <PrivateRoute path="/client" exact component={Clientpages} />

          {/* <Route path="/client" exact component={Clientpages} /> */}

        </Switch>
        
        </BrowserRouter>

    </>
    
  );
}

export default App;
