import React from 'react'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home/Homepage';
import Detaildf from './modals/detaildf/Detaildf';
import Clientpages from './pages/client/homeclient/Clientpages';
import DetailProduct from './pages/client/detailpage/DetailProduct'

const isLogin =true;

function Privateroute({ childd, ...rest }) {
      
  return (

      <Route {...rest} render={ () => {
        if(isLogin) {
          return childd;
        } else {
          return <Redirect to="/" /> 
        }
      } } />

  )
}



function App() {

  return (

    <>
    
        <BrowserRouter>
   
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/detaildf/:id" exact component={Detaildf} />
          <Route path="/client/detailc/:id" exact component={DetailProduct} />
          {/* <Route path="/client" exact component={Clientpages} /> */}

          <Privateroute path="/client">

               <Clientpages/>

          </Privateroute>
        </Switch>
         
        </BrowserRouter>

    </>
    
  );
}



export default App;
