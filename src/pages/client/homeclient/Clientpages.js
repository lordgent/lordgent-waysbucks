import React,{useContext} from 'react'
import Navuser from '../../../components/navbar/Navuser'
import Jumtainer from '../../../components/content/Jumtainer'
import {Container,Row} from 'react-bootstrap'
import Datauser from '../../../components/card/Datauser'
import './style.css'
import {API} from '../../../config/api'
import {UserContext} from '../../../context/contextuser'

function Clientpages() {
    const [state,dispatch] = useContext(UserContext)
    console.log(state);
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
                <h1 className="lt">Lets Order</h1>
                <Container>

                <Row>
         
                        <Datauser/>
                        

                </Row>
                </Container>
        </>
    )
}

export default Clientpages
