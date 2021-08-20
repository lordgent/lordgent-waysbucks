import React from 'react'
import {Modal,Button,Form,Container} from 'react-bootstrap'
// import user from '../../datajson/client.json'
import stylereg from './register.module.css'

function Registeruser(props) {
    
//     const [login,setLogin] = useState([])

//     const handleInput = (event) => {

//         setLogin(inputs => ({...inputs, [event.target.name]: event.target.value}));
// }

const handleInput = () => {

}

    return (
        <>
            <Modal className={stylereg.modal} show={props.show}>
                <Container> 
                    <h1 className={stylereg.til}>Register</h1>
           <Form className={stylereg.form}>

                
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
