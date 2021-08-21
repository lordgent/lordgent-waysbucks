import React,{useState} from 'react'
import {Modal,Button,Form,Container} from 'react-bootstrap'
import stylereg from './register.module.css'

function Registeruser(props) {
   
const obj = [];

const [register,setRegister] = useState([{
    fullname: "",
    email: "",
    password: ""
}])

const handleInput = (e) => {

setRegister({
    ...register,
    [e.target.name]: e.target.value,
})


}

const handleReg = (e) => {
    e.preventDefault()
    obj.push(register);
    console.log(obj);
}

    return (
        <>
            <Modal className={stylereg.modal} show={props.show}>
                <Container> 
                    <h1 className={stylereg.til}>Register</h1>
           <Form className={stylereg.form} onSubmit={handleReg}>

                
           <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" onChange={handleInput} name="email" className={stylereg.input} placeholder="Input your Name" />

            </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicEmail">

                 <Form.Control type="email" onChange={handleInput} name="email" className={stylereg.input} placeholder="Input your email" />

                 </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
           
                <Form.Control type="password" name="password" onChange={handleInput} className={stylereg.input} placeholder="Input your Strong Password" />

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
