import React,{useState} from 'react'
import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import {Container,Col,Row, Form,Button,Alert} from 'react-bootstrap'
import {API} from '../../config/api'
import {useMutation} from 'react-query'
import "./style.css"

function AddToping() {
    let api = API()

    const [form,setform] = useState({
        tittle: '',
        price: '',
        image: ''
    })
    const [previewimage,setpreviewimage] = useState(null)
    const [message,setmessage] = useState(null)
    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]:
            e.target.type === 'file' ? e.target.files : e.target.value
        })

       
       if( e.target.type === "file") {

           let url = URL.createObjectURL(e.target.files[0]);
            setpreviewimage(url) 
       }

    }

    const handleSubmit = useMutation( async (e) => {

        try {
            e.preventDefault()
            const top = new FormData()
            top.set('tittle', form.tittle)
            top.set('price', form.price)
            top.set('image', form.image[0], form?.image[0]?.name)

            const config = {
                method: "POST",
                headers: {
                    Authorization: "Basic " + localStorage.token,
                },
                body: top
            }
            const response = await api.post("/toping", config)
            if(response.status === 'success') {

                const alert = (
                    <Alert variant="success" className="py-1">
                      Add Toping Successfully
                    </Alert>
                  );
                  setmessage(alert);
    
    
    
            }
                

        } catch (error) {
            
        }


    } )

    return (
        <>
        <NavbarAdmin/>

        <Container>
            <Row>
                <Col md={6}>

                <Form  onSubmit={(e) => handleSubmit.mutate(e)} >
                        <h2 className="prd">Toping</h2>
                        {message && message}
                        <Form.Group>
                            <Form.Label>Name Toping</Form.Label>
                            <Form.Control type="text" className="ipt" 
                            name="tittle"
                            onChange={handleChange}
                            placeholder="Ex: Boba manggo .." />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            
                         
                            <Form.Control className="ipt" type="number"
                            name="price"
                            onChange={handleChange}
                            placeholder="Ex: 8.000" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Toping Image</Form.Label>
                            <Form.Control className="ipt"
                            name="image"
                            onChange={handleChange}
                            type="file" placeholder="Password" />
                        </Form.Group>

                        <Button variant="danger" className="btnadd" type="submit">
                            Add Product
                        </Button>
                        </Form>

                </Col>

                <Col md={6}>
                        {previewimage && 
                        (
                            <div className="topimg">
                                <center>

                                <img src={previewimage} alt="preview" height="420" />
                                </center>


                            </div>
                        )
                        }

                </Col>
            </Row>
        </Container>

        </>
    )
}

export default AddToping
