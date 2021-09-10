import React , { useState } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import style from './navcom.module.css'
import {Link} from 'react-router-dom'
import logo from '../../image/icons.png'
import Loginuser from '../../modals/login/Loginuser'
import Registeruser from '../../modals/register/Registeruser'

function Navbarcomp() {

    const [modal,setModal] = useState(false)
    const [togreg,setTogreg] = useState(false)


    function clickModal() {
        setModal(true)
    }
    function exitmodal() {
        setModal(false)
    }


    function clickreg() {
        setTogreg(true)
    }
    function exitreg() {
        setTogreg(false)
    }

    return (
        <>
          
                <Navbar expand="lg" variant="" bg="" className={style.flx}>
                    <Container>
                   <Link className={style.nvlogo}>
                        <img src={logo} className={style.logo} alt="iconlogo" height="35" /> 
                   </Link>
                  
                   <Nav className={style.nv}>

                    <Link className={style.login} onClick={clickModal} >Login</Link>
                    <Link className={style.reg} onClick={clickreg}>Register</Link>
                   </Nav>
                    

                    </Container>
                </Navbar>
                <Loginuser showw={modal} onClick={exitmodal} />
                <Registeruser show={togreg} onClick={exitreg} />
              
        </>
    )
}

export default Navbarcomp
