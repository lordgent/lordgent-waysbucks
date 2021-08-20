import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import style from './navcom.module.css'
import {Link} from 'react-router-dom'
import logo from '../../image/icons.png'

function Navbarcomp() {
    return (
        <>
          
                <Navbar expand="lg" variant="" bg="" className={style.flx}>
                    <Container>
                   <Link className={style.nvlogo}>
                        <img src={logo} className={style.logo} alt="iconlogo" height="35" /> 
                   </Link>
                  
                   <Nav className={style.nv}>

                   <Link className={style.login}> Login </Link>
                    <Link className={style.reg}>Register</Link>
                   </Nav>
                    

                    </Container>
                </Navbar>

         
        </>
    )
}

export default Navbarcomp
