import React , { useState } from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import style from './navcom.module.css'
import {Link} from 'react-router-dom'
import logo from '../../image/icons.png'
import Loginuser from '../../modals/login/Loginuser'


function Navbarcomp() {

    const [modal,setModal] = useState(false)

    function clickModal() {
        setModal(true)
    }
    function exitmodal() {
        setModal(false)
    }
    return (
        <>
          
                <Navbar expand="lg" variant="" bg="" className={style.flx}>
                    <Container>
                   <Link className={style.nvlogo}>
                        <img src={logo} className={style.logo} alt="iconlogo" height="35" /> 
                   </Link>
                  
                   <Nav className={style.nv}>

                 
                    <Link className={style.reg}>Register</Link>
                    <Button className={style.login} onClick={clickModal} >Login</Button>
                   </Nav>
                    

                    </Container>
                </Navbar>
                <Loginuser show={modal} onClick={exitmodal} />
         
        </>
    )
}

export default Navbarcomp
