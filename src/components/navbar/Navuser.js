import React from 'react'
import {Navbar,Container,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../../image/icons.png'
import style from './Navuser.module.css'
import cart from './cart.png'
import {useHistory} from 'react-router-dom'


function Navuser() {
    const log = JSON.parse(localStorage.getItem('userlogin'))
    let redire = useHistory()

    const logout = () => {
        localStorage.removeItem('userlogin')
        localStorage.removeItem('login')
        redire.push('/')
    }

    return (
        <>
            
            <Navbar expand="lg" variant="" bg="">
                    <Container>
                            <Link to="/client">
                                <img id="collasible-nav-dropdown" src={logo} alt="logowaysbucks" height="40" />
                            </Link>

                            <div  className="d-flex">
                             <Link> <img src={cart} alt="cartlogo" height="27" className={style.cart} /> </Link>

                            <NavDropdown className={style.drop} id="navbarScrollingDropdown">
       
                                <Link to="/client/profile">
                                      Profile
                                </Link>
                                <hr/>
                                <br/>
                                    <button onClick={logout}>Logout</button>
                            </NavDropdown>

                            </div>

                    </Container>
                </Navbar>
        </>
    )
}

export default Navuser
