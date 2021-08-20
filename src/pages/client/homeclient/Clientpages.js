import React from 'react'
import Navuser from '../../../components/navbar/Navuser'
import Jumtainer from '../../../components/content/Jumtainer'
import {Container,Row} from 'react-bootstrap'
import Datauser from '../../../components/card/Datauser'
import './style.css'

function Clientpages() {
    return (
        <>
            <Navuser/>
            
            <Container>
            <Jumtainer 
                title="WaysBucks" 
                promo="This are Changing, but we're still here for you" 
                spn="We have temporarily closed our in-store Cafes, but select grocery
                 and drive-thru locations remaining open. WaysBucks Drivers is also avaliable
                  Let's Order" 
            />

            </Container>
                <h1 className="lets">Lets Order</h1>
                <Container>

                <Row>
         

                        <Datauser/>
                        

                </Row>
                </Container>
        </>
    )
}

export default Clientpages