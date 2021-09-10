import React,{useState} from 'react'
import NavbarAdmin  from '../../components/navbar/NavbarAdmin'
import {Form,Container,Row,Col, Button,Alert} from 'react-bootstrap'
import './style.css'
import {useMutation} from 'react-query'
import {API} from '../../config/api'
import {useHistory} from 'react-router-dom'

function Addproduct() {
    let render = useHistory()
    let api = API()
    document.title = "Dashboard Admin | Waysbucks"


const [preview,setpreview] = useState(null)
const [message,setmessage] = useState(null)
const [form, setform] = useState({
    tittle: '',
    price: '',
    image: ''
})
const handleChange = (e) => {
    setform({
        ...form,
        [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value
    })
    
    if (e.target.type === "file") {
        let url = URL.createObjectURL(e.target.files[0]);
        setpreview(url);
    }
    
};

const handleSubmit = useMutation( async (e) => {
    
    try {
        
        e.preventDefault()
        const product = new FormData()
        product.set("tittle", form.tittle)
        product.set("price", form.price)
        product.set("image", form?.image[0], form?.image[0]?.name)

        const config = {
            method: "POST",
            headers: {
                Authorization: "Basic " + localStorage.token,
                
            },
            body: product
        }
        const response = await api.post("/product", config)
        console.log(response);
        if(response.status === 'success') {

            const alert = (
                <Alert variant="success" className="py-1">
                  Add Product Successfully
                </Alert>
              );
              setmessage(alert);



        }
            
    } catch (error) {
        console.log(error);
    }
} )
console.log(form);
return (
        <>
        <NavbarAdmin/>
        <Container>

                <Row>
                    <Col md={6}>
                    {message && message}
                    <Form  onSubmit={(e) => handleSubmit.mutate(e)} >
                        <h2 className="prd">Product</h2>
                        <Form.Group>
                            <Form.Label>Name Product</Form.Label>
                            <Form.Control type="text" className="ipt" 
                            name="tittle"
                            onChange={handleChange}
                            placeholder="Ex: Coffee .." />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            
                         
                            <Form.Control className="ipt" type="number"
                            name="price"
                            onChange={handleChange}
                            placeholder="Ex: 30,000,00" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Product Image</Form.Label>
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
                {preview && (
                <div>
                  <img
                    src={preview}
                    style={{
                      maxWidth: "350px",
                      maxHeight: "350px",
                      objectFit: "cover",
                    }}
                    alt="priview-image"
                  />
                </div>
              )}
                </Col>


                </Row>





        </Container>


        </>
    )
}

export default Addproduct
