import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Navuser() {
    return (
        <>
            
            <Navbar expand="lg" variant="" bg="" className={style.flx}>
                    <Container>
                   <Link className={style.nvlogo}>
                        <GrJava className={style.logo} /> 
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

export default Navuser
