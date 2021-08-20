import React , { useState } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import style from './navcom.module.css'
import {Link} from 'react-router-dom'
import logo from '../../image/icons.png'
import Loginuser from '../../modals/login/Loginuser'
import { MdSort } from "react-icons/md";


function Navbarcomp() {

    const [modal,setModal] = useState(false)
    const [tognav, setTognav] = useState(false)

    function clickModal() {
        setModal(true)
    }
    function exitmodal() {
        setModal(false)
    }

    const tooglenav = () => {

        setTognav(true)
        alert('test')
    }
    return (
        <>
          
                <Navbar expand="lg" variant="" bg="" className={style.flx}>
                    <Container>
                   <Link className={style.nvlogo}>
                        <img src={logo} className={style.logo} alt="iconlogo" height="35" /> 
                   </Link>
                  
                   <Nav className={style.nv}>

                    <MdSort className={style.toogle} onClick={tooglenav} />
                    <Link className={style.reg}>Register</Link>
                    <Link className={style.login} onClick={clickModal} >Login</Link>
                   </Nav>
                    

                    </Container>
                </Navbar>
                <Loginuser show={modal} onClick={exitmodal} />
                <div show={tognav}>
             
                </div>
         
        </>
    )
}

export default Navbarcomp
