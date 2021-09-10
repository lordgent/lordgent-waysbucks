import React,{useEffect,useContext} from 'react'
import { BrowserRouter, Route, Switch,useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home/Homepage';
import Detaildf from './modals/detaildf/Detaildf';
import Clientpages from './pages/client/homeclient/Clientpages';
import DetailProduct from './pages/client/detailpage/DetailProduct'
import Profileuser from './pages/client/profilpage/Profileuser';
import Cartuser from './pages/client/cart/Cartuser';
import HomeAdmin from './pages/admin/home/HomeAdmin';
import TransactionUser from './pages/admin/transaction/TransactionUser';
import Addproduct from './pages/admin/Addproduct';
import {UserContext} from './context/contextuser'
import {API} from './config/api'
import ProductAdmin from './pages/admin/ProductAdmin';
import AddToping from './pages/admin/AddToping';
import TopingAdmin from './pages/admin/TopingAdmin';
import PrivateRoute from './pages/PrivateRoute'
import Editprofile from './pages/client/Editprofile';

function App() {

  let api = API();
  const [state, dispatch] = useContext(UserContext);
  const render = useHistory();

  useEffect(() => {
  
    if (state.isLogin === false) {
      render.push("/");
    } else {
      if (state.user.status === "admin") {
        render.push("/admin");

      } else if (state.user.status === "user") {
        render.push("/client");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await api.get("/cekauth", config);


      if (response.status === "failed") {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (

    <>
        <BrowserRouter>
   
        <Switch>

          <Route path="/" exact component={Homepage} />
          <PrivateRoute  path="/detaildf/:id" exact component={Detaildf} />
         <PrivateRoute exact path='/client' component={Clientpages}/>
         <PrivateRoute exact path="/client/profile"  component={Profileuser} />
         <PrivateRoute exact path="/client/profile/:id"  component={Editprofile} />
         <PrivateRoute exact path="/client/detailc/:id" component={DetailProduct} />
         <PrivateRoute exact path="/client/mycart"  component={Cartuser}/>
         <PrivateRoute exact path="/admin" component={HomeAdmin} />
         <PrivateRoute exact path="/admin/product" component={ProductAdmin} />
         <PrivateRoute  exact path="/admin/transaction" component={TransactionUser} />
         <PrivateRoute exact path="/admin/addproduct" component={Addproduct} />
         <PrivateRoute exact path="/admin/addtoping" component={AddToping} />
         <PrivateRoute exact path="/admin/toping" component={TopingAdmin} />

        </Switch>
         
        </BrowserRouter>
    </>
    
  );
}

export default App;
