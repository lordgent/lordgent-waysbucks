import React,{useState,useContext} from 'react'
import {Modal,Button,Form,Container, Alert} from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom';
import stylelogin from './login.module.css'
import {useMutation} from 'react-query'
import {API} from '../../config/api'
import {UserContext} from '../../context/contextuser'

function Loginuser(props) {
    let api = API()
    let render = useHistory()

    const [message,setmessage] = useState(false)
    const [state,dispatch] = useContext(UserContext)
    const [login,setlogin] = useState({
        email: '',
        password: ''
    })
    const {email,password} = login

    const handleChange = (e) => {

        setlogin({
            ...login,
            [e.target.name]: e.target.value
        })}

    const handleLogin = useMutation( async (e) => {
        try {
            e.preventDefault()
            const form = JSON.stringify(login)
            const config = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: form
            }
            const response = await api.post('/login', config)
            console.log(response);
            if(response.status === 'success') {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: response.data,
                })

                if(response.data.status === 'admin') {
                    localStorage.setItem('login', 'true')
                    render.push('/admin')
            
                } else {
                    localStorage.setItem('login', 'true')
                    render.push('/client')

                }
                const alert = (
                    <Alert variant="success" className="py-1">
                      Login success
                    </Alert>
                  );
                  setmessage(alert);
                  

            } else {
                const failedlogin = (
                    <Alert variant="danger">
                        Username/password Salah!
                    </Alert>
                )
                setmessage(failedlogin)
            }
            
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                  Login failed
                </Alert>
              );
              setmessage(alert);
              console.log(error);
            
        }
    } )

    return (
        <>
            <Modal className={stylelogin.modal} show={props.showw}>
                <Container> 
                    <h1 className={stylelogin.til}>Login</h1>
                    {message && message}
           <Form className={stylelogin.form} onSubmit={(e) => handleLogin.mutate(e)}>

                 <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" className={stylelogin.input} 
                    onChange={handleChange} name="email" value={email} placeholder="Input your email" />

                 </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
           
                <Form.Control type="password" 
                onChange={handleChange}
                value={password}
                className={stylelogin.input} name="password" placeholder="Input your Strong Password" />

            </Form.Group>
          
                <Button type="submit" className={stylelogin.btnlog}>Login</Button>
                <p className={stylelogin.spn}>Don't have an account klik <Link>Here</Link> </p>
         </Form>

            </Container>
            </Modal>
        </>
    )
}

export default Loginuser
