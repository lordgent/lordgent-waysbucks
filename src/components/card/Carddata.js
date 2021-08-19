import React,{useState,useEffect} from 'react'
import {Card, Col} from 'react-bootstrap'
import style from './card.module.css'
import {Link} from 'react-router-dom'
import { ImMug } from "react-icons/im";


function Carddata() {

    const [product,setProduct] = useState([])
    const [load,setLoad] = useState(true)
useEffect( () => {

    const data = fetch('https://my-json-server.typicode.com/lordgent/fakedata/product');

    data.then(response => {
        return response.json()
    } )
        .then(result => {
            setProduct(result)  
            setLoad(false)
          
        } )
    .catch(err => {
        console.log(err);
    })
} ) 

    if(load) {
        return (
            <div className={style.load}>
                <p>Please Wait.. <ImMug className={style.iconload}/></p>
                
                <br/>
                <br/>
                <br/>
            </div>
        )
    }

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
                 
                    <Link to={`detaildf/${data.id} `} >Detail</Link>
                </Card.Body>
            </Card>
                
        </center>
        </Col>
        )}
           
        </>
    )
}

export default Carddata
