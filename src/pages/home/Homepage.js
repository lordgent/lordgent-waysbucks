import React from 'react'
import {Container,Row} from 'react-bootstrap'
import Jumtainer from '../../components/content/Jumtainer'
import './home.css'
import Carddata from '../../components/card/Carddata'
import Navbarcomp from '../../components/navbar/Navbarcomp'

function Homepage() {


    return (
        <>
        <Navbarcomp/>

          <Container>
            <Jumtainer title="WaysBucks" 
            promo="This are Changing, but we're still here for you" 
            spn="We have temporarily closed our in-store Cafes, but select grocery
             and drive-thru locations remaining open. WaysBucks Drivers is also avaliable
              Let's Order" />
            <h1 className="lets">
                Let's Order
            </h1>
          </Container>
            
          <Container className="cont">

          <Row className="contcard">
                <Carddata/>
               
        </Row>

          </Container>
        </>
    )
}

export default Homepage
