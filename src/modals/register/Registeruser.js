import React,{useState} from 'react'
import {Modal,Button,Form,Container,Alert} from 'react-bootstrap'
import stylereg from './register.module.css'

import {API} from '../../config/api'
import {useMutation} from 'react-query'

function Registeruser(props) {

    let api = API()


    const [message,setmessage] = useState(null)
    const [formreg, setformreg] = useState({
        fullname: '',
        email: '',
        password: '',
        status: 'user',
    
    })
    
    const {fullname,email,password} = formreg

    const handleChange = (e) => {
        setformreg({
          ...formreg,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = useMutation( async (e) => {


      e.preventDefault()
        try {

      const body = JSON.stringify(formreg);

      // Configuration Content-type
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };


      const response = await api.post("/register", config);
      console.log(response);
      if (response.status === "Success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Register Successfully
          </Alert>
        );
        setmessage(alert);
        setformreg({
          fullname: "",
          email: "",
          password: "",
          status: "user",
        });

      } else if(response.status === "Emailready") {
        const alertmail = ( 
          <Alert variant="danger" className="py-1">
            Email Is Invalid or Ready
          </Alert>
        )
        setmessage(alertmail)

      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
       
        setmessage(alert);
      }

        } catch (error) {
        console.log(error)
            const alert = (
                <Alert variant="danger" className="py-1">
                  Failed
                </Alert>
              );
              setmessage(alert);

        }
    } );
    console.log(formreg)
    return (
        <>
            <Modal className={stylereg.modal} show={props.show}>
                <Container> 
                    <h1 className={stylereg.til}>Register</h1>
                    {message && message && message}
           <Form className={stylereg.form} onSubmit={(e) => handleSubmit.mutate(e)} >

                
           <Form.Group className="mb-3">

                <Form.Control type="text" 
                onChange={handleChange}
                value={fullname}
                name="fullname"
                className={stylereg.input} placeholder="Input your Name" />
            </Form.Group>

    
            <Form.Group className="mb-3">

                 <Form.Control type="email" 
                 onChange={handleChange}
                 value={email}
                 name="email"
                 className={stylereg.input} placeholder="Input your email" />
                 </Form.Group>

            <Form.Group className="mb-3">
           
                <Form.Control type="password" 
                onChange={handleChange}
                value={password}
                name="password"
                className={stylereg.input} placeholder="Input your Strong Password" />

            </Form.Group>
        <input 
        type="hidden"
         name="status"
         value="user"
         onChange={handleChange}
         />
         
          
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
