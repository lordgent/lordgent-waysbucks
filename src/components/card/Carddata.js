import React,{useState,useEffect} from 'react'
import {Card,Button,Col} from 'react-bootstrap'
import style from './card.module.css'

function Carddata() {

    const [product,setProduct] = useState([])
useEffect( () => {

    const data = fetch('https://my-json-server.typicode.com/lordgent/fakedata/product');

    data.then(response => {
        return response.json()
    } )
        .then(result => {
            setProduct(result)
          
        } )
    .catch(err => {
        console.log(err);
    })
} ) 

    return (
        <>
        
        {product.map((data,idx) => 

        <Col md={4} className={style.cardcol}>
            <center>
            <Card style={{ width: '14rem'}} key={idx} className="mb-3">
                <Card.Img variant="top" src={data.imgs} alt="datacofee" />
                <Card.Body>
                    <Card.Title>{data.item}</Card.Title>
                    <Card.Text>
                        {data.price}
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                </Card.Body>
            </Card>
                
        </center>
        </Col>
        )}
           
        </>
    )
}

export default Carddata
