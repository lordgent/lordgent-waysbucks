import React from 'react'
import {Modal,Button,Form,Container} from 'react-bootstrap'
import stylelogin from './login.module.css'
// import user from '../../datajson/client.json'

function Loginuser(props) {
    
    return (
        <>
            <Modal className={stylelogin.modal} show={props.showw}>
                <Container> 
                    <h1 className={stylelogin.til}>Login</h1>
           <Form className={stylelogin.form}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">

                 <Form.Control type="email"  name="email" className={stylelogin.input} placeholder="Input your email" />

                 </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
           
                <Form.Control type="password" name="password"  className={stylelogin.input} placeholder="Input your Strong Password" />

            </Form.Group>
          
           <Button variant="primary" type="submit" className={stylelogin.btnlogin}>Login</Button>

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

export default Loginuser
