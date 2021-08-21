import React from 'react'
import {Modal,Button,Form,Container} from 'react-bootstrap'
import stylereg from './register.module.css'

function Registeruser(props) {
   
    return (
        <>
            <Modal className={stylereg.modal} show={props.show}>
                <Container> 
                    <h1 className={stylereg.til}>Register</h1>
           <Form className={stylereg.form} >

                
           <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text"  name="email" className={stylereg.input} placeholder="Input your Name" />

            </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicEmail">

                 <Form.Control type="email"  name="email" className={stylereg.input} placeholder="Input your email" />

                 </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
           
                <Form.Control type="password" name="password" className={stylereg.input} placeholder="Input your Strong Password" />

            </Form.Group>
          
           <Button variant="primary" type="submit" className={stylereg.btnlogin}>Login</Button>

         </Form>

            <Modal.Dialog>
                
                <Button onClick={props.onClick}>
                Close
                </Button>
            </Modal.Dialog>
            </Container>
            </Modal>
        </>
    )
}

export default Registeruser
