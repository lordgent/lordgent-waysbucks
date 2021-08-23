import React from 'react'
import {Card, Col} from 'react-bootstrap'
import style from './card.module.css'
// import { ImMug } from "react-icons/im";
import NumberFormat from '../NumberFormat';
import {Link} from 'react-router-dom'
import Product from '../../datajson/Product'

const Datauser =() => {

    return (
        <>
        
            {Product.map( (rows,idx) => 
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
