import React,{useState,useEffect} from 'react'
import {Card, Col} from 'react-bootstrap'
import style from './card.module.css'
import { ImMug } from "react-icons/im";
import NumberFormat from '../NumberFormat';
import {Link} from 'react-router-dom'

const Datauser =() => {

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
            console.log(result);
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
                    <Card.Img variant="top" src={"assets/images/"+rows.imgs} alt="icoss" />
                    <Card.Body>
                        <Card.Title>{rows.item}</Card.Title>
                        <Card.Text>
                          Rp. { NumberFormat(rows.price)  }
                        </Card.Text>
                        <center>

                        <Link className={style.order} to={"/client/detailc/"+rows.id}>Order</Link>
                        </center>
                    </Card.Body>
                    </Card>
                                    
                                    
                                    </Col>
                                    ) }
           
        </>
    )
}

export default Datauser
