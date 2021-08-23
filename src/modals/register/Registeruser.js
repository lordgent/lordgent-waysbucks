import React,{useState} from 'react'
import {Modal,Button,Form,Container} from 'react-bootstrap'
import stylereg from './register.module.css'
import User from '../../datajson/User'

function Registeruser(props) {
   
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password, setpassword] = useState('');


    const handlereg = (e) => {
        e.preventDefault()
        let obj = {
            name,role: 'client', email, password
        }
        User.push(obj)
    }

    return (
        <>
            <Modal className={stylereg.modal} show={props.show}>
                <Container> 
                    <h1 className={stylereg.til}>Register</h1>
           <Form className={stylereg.form} onSubmit={handlereg} >

                
           <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" 
                onChange={(e)=> setname(e.target.value)}
                value={name}
                className={stylereg.input} placeholder="Input your Name" />
            </Form.Group>

            

            <Form.Group className="mb-3" controlId="formBasicEmail">

                 <Form.Control type="email" 
                 onChange={(e) => setemail(e.target.value)}
                 value={email}
                 className={stylereg.input} placeholder="Input your email" />
                 </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
           
                <Form.Control type="password" 
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className={stylereg.input} placeholder="Input your Strong Password" />

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
