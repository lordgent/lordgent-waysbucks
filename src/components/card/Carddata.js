import React,{useState,useEffect} from 'react'
import {Card, Col} from 'react-bootstrap'
import style from './card.module.css'
// import {Link} from 'react-router-dom'
import { ImMug } from "react-icons/im";
import NumberFormat from '../NumberFormat';

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
},[] ) 

    if(load) {
        return (
            <div className={style.load}>
                <p>Please Wait.. <ImMug className={style.iconload}/></p>
                
                <br/>
                <br/>
                
            </div>
        )
    }

    return (
        <>
        
            {product.map( (rows,idx) => 
        <Col md={3} key={idx}>
                

                    <Card   className={style.crd}>
                    <Card.Img variant="top" src={"assets/images/"+rows.imgs} />
                    <Card.Body>
                        <Card.Title>{rows.item}</Card.Title>
                        <Card.Text>
                          Rp. { NumberFormat(rows.price)  }
                        </Card.Text>
            
                    </Card.Body>
                    </Card>
                                    
                                    
                                    </Col>
                                    ) }
           
        </>
    )
}

export default Carddata
