import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { IoIosCart } from "react-icons/io";
import logo from '../../image/icons.png'
import style from './Navuser.module.css'


function Navuser() {
    return (
        <>
            
            <Navbar expand="lg" variant="" bg="">
                    <Container>
                            <Link to="/client">
                                <img  src={logo} alt="logowaysbucks" height="40" />
                            </Link>

                            <div  className="d-flex">
                                <Link><IoIosCart className={style.logo} /></Link>
                                <Link to="profile">
                                    <img  src={logo} alt="profileuser" className={style.profil} height="30" />
                                </Link>
                            </div>

                    </Container>
                </Navbar>
        </>
    )
}

export default Navuser
