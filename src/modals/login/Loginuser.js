import React,{useState} from 'react'
import {Modal,Button,Form,Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import stylelogin from './login.module.css'
import User from '../../datajson/User';

function Loginuser(props) {
    
    const [password,setpassword] = useState('');
    const [email, setemail] =  useState('');
    const rt = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()
       
        let cek = User;

        cek.map((rows) => {
            
            if(email === rows.email && password === rows.password && rows.role === 'client' ) {

                rt.push('/client')
                localStorage.setItem('login', 'true')
                let ses = [
                    {   
                        id: rows.id,
                        img: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
                        name: rows.name,
                        email: rows.email,
                        password: rows.password,

                    }
                ]
                localStorage.setItem('userlogin', JSON.stringify(ses))
               
                
                   
            } else {
               return false
             
            }

        } )
        
    }

    
    return (
        <>
            <Modal className={stylelogin.modal} show={props.showw}>
                <Container> 
                    <h1 className={stylelogin.til}>Login</h1>
           <Form className={stylelogin.form} onSubmit={handleLogin}>

                 <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" className={stylelogin.input} 
                    onChange={(e) => setemail(e.target.value)} value={email} placeholder="Input your email" />

                 </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
           
                <Form.Control type="text" 
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className={stylelogin.input} placeholder="Input your Strong Password" />

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
