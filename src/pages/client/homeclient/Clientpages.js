import React from 'react'
import Navuser from '../../../components/navbar/Navuser'
import Jumtainer from '../../../components/content/Jumtainer'
import {Container,Row} from 'react-bootstrap'
import Carddata from '../../../components/card/Carddata'

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
                <h1>Lets Order</h1>
                <Container>

                <Row>
                        <Carddata/>

                </Row>
                </Container>
        </>
    )
}

export default Clientpages
