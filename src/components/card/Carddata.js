import React from 'react'
import {Card, Col} from 'react-bootstrap'
import style from './card.module.css'
import {API} from '../../config/api'
import {useQuery} from 'react-query'

function Carddata() {
    const rp = require('rupiah-format')
    let api = API()
   
    document.title = "Waysbucks Shop" 
    let {data: products } = useQuery("ProductsCache", async () => { 
        const config = {
            method: 'GET'
        }
        const response = await api.get('/products', config)
        return response.data
    })

console.log(products);

    return (
        <>
        {
            products?.map( (rows,idx) => 
            <Col md={3} xs={3} key={idx}>
                    
    
                        <Card className={style.crd}>
                        <Card.Img  src={"http://localhost:4005/uploads/"+rows.image} className={style.imgs} alt={rows.image} />
                        <Card.Body>
                            <Card.Title className={style.tit}>{rows.tittle}</Card.Title>
                            <Card.Text className={style.price}>
                               { rp.convert(rows.price)  }
                            </Card.Text>
                
                        </Card.Body>
                        </Card>         
                                        </Col>
                         ) 

        }
           
           
        </>
    )
}

export default Carddata
