import React,{useState,useEffect} from 'react'
import {Card, Col} from 'react-bootstrap'
import style from './card.module.css'
import {Link} from 'react-router-dom'
import { ImMug } from "react-icons/im";
import NumberFormat from '../frmt';

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

        <Col md={3} xs={6} className={style.cardcol}>
            <center>
            <Card key={idx} className={style.crd}>
                <img src={"assets/images/"+data.imgs} alt={data.imgs} />
                <Card.Body>
                    <Card.Title className={style.titl}>{data.item}</Card.Title>
                    <Card.Text className={style.price}>
                        Rp {NumberFormat(data.price) }
                    </Card.Text>
                 
                    <Link to={`detaildf/${data.id} `} className={style.dt} >Detail</Link>
                </Card.Body>
            </Card>
                
        </center>
        </Col>
        )}
           
        </>
    )
}

export default Carddata
