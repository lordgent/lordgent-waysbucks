import React,{useState,useEffect} from 'react'
import {Container , Row, Col} from 'react-bootstrap'

function Detailpage({ match }) {
    const id = match.params.id
    const [detailproduct,setDetailproduct] = useState([]);
    useEffect(() => {

        const detail = fetch(`https://my-json-server.typicode.com/lordgent/fakedata/product/${id}`);
            detail.then((response) => {
                return response.json()
            })
            .then(result => {
                setDetailproduct(result)
                console.log(result);
            } )
            .catch(err => {
                console.error(err + ' errrorrrrrr');
            } )

    } )

    return (
        <>
          <Container>
            <Row>

                <Col md={6}>
                    <img src={detailproduct.imgs} alt="detail" width="320rem" />
                </Col>
                <Col md={6}>
                    <h2>{detailproduct.item}</h2>
                    <p>Rp.{detailproduct.price}</p>
                    <p>Toping</p>
                
                    <Row>
                   
                    </Row>

                </Col>
                
            </Row>
          </Container>
        </>
    )
}

export default Detailpage
