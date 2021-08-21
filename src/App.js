import React from 'react'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home/Homepage';
import Detaildf from './modals/detaildf/Detaildf';
import Clientpages from './pages/client/homeclient/Clientpages';
import DetailProduct from './pages/client/detailpage/DetailProduct'

function Privateroute({ childd, ...rest }) {
  
  const isLogin = false;
      
  return (

      <Route {...rest} render={ (props) => 
       isLogin ? <childd {...props}/> 
       : <Redirect to="/" />
       } />

  )
} 

function App() {

  return (

    <>
    
        <BrowserRouter>
   
        <Switch>

          <Route path="/" exact component={Homepage} />
          <Route path="/detaildf/:id" exact component={Detaildf} />
         <Privateroute path='/client' exact component={Clientpages} />
          <Route path="/client/detailc/:id" exact component={DetailProduct} />
          {/* <Route path="/client" exact component={Clientpages} /> */}

        </Switch>
         
        </BrowserRouter>

    </>
    
  );
}



export default App;
