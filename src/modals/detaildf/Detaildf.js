import React,{useState,useEffect} from 'react'
import {Container , Row, Col, Modal,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styledt from './detail.module.css'

function Detaildf({ match }) {

    const id = match.params.id;

    const [detailproduct,setDetailproduct] = useState([]);
    
    useEffect(() => {

        const detail = fetch(`https://my-json-server.typicode.com/lordgent/fakedata/product/${id}`);
            detail.then((response) => {
                return response.json()
            })
            .then(result => {
                setDetailproduct(result)
             
            } )
            .catch(err => {
                console.error(err + ' errrorrrrrr');
            } )

    } )

    return (
        <>
          
          <Modal.Dialog>

            <Modal.Body>
            <Container>
            <Row>

                <Col md={6}>
                    <img src={detailproduct.imgs} alt="detail" width="160rem" />
                </Col>
                <Col md={6}>
                    <p className={styledt.item}>{detailproduct.item}</p>
                    <p>Rp.{detailproduct.price}</p>
                    <p>Toping</p>
                
                    <Row>
                   
                    </Row>

                </Col>
                
            </Row>
          </Container>
            </Modal.Body>

            <Modal.Footer>
             <Link to="/" className={styledt.cls}>Close</Link>
                
            </Modal.Footer>
        </Modal.Dialog>

        </>
    )
}

export default Detaildf;
