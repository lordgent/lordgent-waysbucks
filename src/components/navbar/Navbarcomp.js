import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { GrJava } from "react-icons/gr";
import style from './navcom.module.css'
import {Link} from 'react-router-dom'
function Navbarcomp() {
    return (
        <>
          
                <Navbar expand="lg" variant="light" bg="" className={style.flx}>
                    <Container>
                    <Navbar.Brand href="#">
                        <GrJava/> 
                    </Navbar.Brand>
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
