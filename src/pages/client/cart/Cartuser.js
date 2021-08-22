import React from 'react'
import Navuser from '../../../components/navbar/Navuser'
import {Col,Container,Row,Form,Button} from 'react-bootstrap'
import './cart.css'


function Cartuser() {
    return (
        <>
            <Navuser/>

            <Container className="paycart">

                <Row>

                        <Col md={6}>
                            <h4 className="ti">My Cart</h4>
                            <p>Review Your Order</p>
                            <hr/>

                            <h1>CART</h1>
                                <hr/>
                                <Row>
                                    <Col md={4} >
                                    <p>Sub Total</p>
                                    <p>QTY</p>
                                    <hr/>
                                    </Col>

                                    <Col md={2}>
                                        <h1>Barcode</h1>
                                    </Col>



                                </Row>

                        </Col>

                        <Col md={6}>

                <Form className="forms">

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Fullname" className="inptcntrl" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" className="inptcntrl"  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="No Phone" className="inptcntrl"  />
                </Form.Group>


                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Pas Code" className="inptcntrl"  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Address" className="inptcntrl"  />
                </Form.Group>
              

                <Button variant="primary" className="btnpay" type="submit">
                    Pay
                </Button>
                </Form>



                        </Col>


                </Row>


            </Container>

        </>
    )
}

export default Cartuser
