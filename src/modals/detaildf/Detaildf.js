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
          
          <Modal.Dialog style={{transition: '7s'}}>

            <Modal.Body>
            <Container>
            <Row>

                <Col md={6}>
                    <img src={"/assets/images/"+detailproduct.imgs} alt={detailproduct.imgs} width="130rem" />
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
