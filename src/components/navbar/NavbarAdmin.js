import React,{useContext, useEffect,useState} from 'react'
import {Navbar,Container,Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../../image/icons.png'
import { BsPeopleCircle } from "react-icons/bs";
import './navadm.css'
import {UserContext} from '../../context/contextuser'
import {useHistory} from 'react-router-dom'
 
function NavbarAdmin() {

let render = useHistory()
    
    const [state,dispatch] = useContext(UserContext)
    function logoutadm() {
        
        dispatch({
            type: "LOGOUT"
        })
        localStorage.removeItem('login')
        render.push("/")
    }
console.log(state);


    return (
        <>
            
            <Navbar expand="lg" variant="" bg="">
                    <Container>
                            <Link to="/admin">
                                <img id="collasible-nav-dropdown" src={logo} alt="logowaysbucks" height="40" />
                            </Link>

                            <div  className="d-flex">
                            

                            <Dropdown className="drop">
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="tog">
                                <BsPeopleCircle className="icn" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dpm">
                                <Link to="/admin/addproduct" className="btntog">Add Product</Link>
                                <br/>
                                <Link to="/admin/addtoping" className="btntog" >Add Toping</Link>  
                                <br/>           
                                <Link to="" className="btntog" onClick={logoutadm}>Logout</Link>
                              
                            </Dropdown.Menu>
                            </Dropdown>
                            </div>
                    </Container>
                </Navbar>
        </>
    )
}

export default NavbarAdmin

