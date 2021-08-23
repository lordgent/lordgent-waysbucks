import React from 'react'
import Navuser from '../../../components/navbar/Navuser'
import {Container, Col, Row, Card} from 'react-bootstrap'
import './profile.css'

function Profileuser() {

    const user = JSON.parse(localStorage.getItem('userlogin'))
    const cart = JSON.parse(localStorage.getItem('mycart'))

    return (
        <>
            <Navuser/>

        <Container>

            <Row className="profile">

                    <Col md={6}>
                        <h5 className="pr">My profile</h5>

                        <Card className='cardprofile'>
                          
                        {user.map((rows) => 
                            <Row>
                                <Col md={4}>
                                    <img src={rows.img} alt="profilepicture" height="120" />
                                </Col>

                                <Col>
                               
                                    <p>Name : {rows.name}</p>
                                    <p>Email: {rows.email}</p>
                                </Col>
                            </Row>
                        )}

                        </Card>

                    </Col>

                    <Col md={6}>
                        <h4>My Transaction</h4>
                        <Card className="cart">

                            {cart ? 

                                cart.map((row,idc) => 
                                                            
                                    <div key={idc} className='transaction'>
                                        
                                        <Row>

                                            <Col md={2}>
                                            <img src={"/assets/images/"+row.img} className="imt" height="100" alt={row.img} />
                                            </Col>
                                    <Col md={6}>

                                    <h5>{row.nameitem}</h5>
                                        <p className="dt">{row.date}</p>
                                        <p className="prc">Rp.{row.price}</p>

                                    </Col>


                                        </Row>

                                    </div>

                                )
                            
                            
                            : <h3 className="nottr">Not Transaction</h3>  }
                          
                        </Card>
                    
                    </Col>
            </Row>
                      


        </Container>


        </>
    )
}

export default Profileuser
