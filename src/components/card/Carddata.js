import React from 'react'
import {Card, Col} from 'react-bootstrap'
import style from './card.module.css'
// import {Link} from 'react-router-dom'
// import { ImMug } from "react-icons/im";
import NumberFormat from '../NumberFormat';
import Product from '../../datajson/Product'

function Carddata() {

    return (
        <>
        
            {Product.map( (rows,idx) => 
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
