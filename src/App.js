import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home/Homepage';
import Detaildf from './modals/detaildf/Detaildf';
import Clientpages from './pages/client/homeclient/Clientpages';
import DetailProduct from './pages/client/detailpage/DetailProduct'
import PrivateRoute from './pages/Privateroute';
function App() {

  return (

    <>
    
        <BrowserRouter>
   
        <Switch>

          <Route path="/" exact component={Homepage} />
          <Route path="/detaildf/:id" exact component={Detaildf} />
          <Route path="/client/detailc/:id" exact component={DetailProduct} />
          {/* <Route path="/client" exact component={Clientpages} /> */}

         <PrivateRoute exact path='/client' component={Clientpages} />
        </Switch>
         
        </BrowserRouter>

    </>
    
  );
}



export default App;
