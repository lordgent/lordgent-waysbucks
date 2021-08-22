import React from 'react'
import Navuser from '../../../components/navbar/Navuser'
import {Container, Col, Row, Card} from 'react-bootstrap'
import './profile.css'

function Profileuser() {

    const user = JSON.parse(localStorage.getItem('userlogin'))

    return (
        <>
            <Navuser/>

        <Container>

                        {user.map((rows) => 
            <Row className="profile">

                    <Col md={6}>
                        <h5>My profile</h5>

                        <Card className='cardprofile'>
                          
                            <Row>
                                <Col md={4}>
                                    <img src={rows.img} alt="profilepicture" height="120" />
                                </Col>

                                <Col>
                                    <p>{rows.name}</p>
                                    <p>{rows.email}</p>
                                </Col>
                            </Row>

                        </Card>
                        

                    </Col>

                    <Col md={6}>
                        <h4>My Transaction</h4>
                        <Card className="cart">
                            {rows.cart !== [] ? (
                                <>
                                    <h4 className="not">Transaction Not Found</h4>
                                </>
                            ) : <h1>Ada</h1>
                             }
                        </Card>
                    
                    </Col>
            </Row>
                        )}


        </Container>


        </>
    )
}

export default Profileuser
