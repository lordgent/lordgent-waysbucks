import React,{useState,useEffect} from 'react'
import {Container , Row, Modal, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styledt from './detail.module.css'
// import NumberFormat from '../../components/frmt'

function Detaildf({ match }) {

    const [detailproduct,setDetailproduct] = useState([]);

    const id = match.params.id
    
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
            })

       

    },[] )

    return (
        <>
          
          <Modal.Dialog>

            <Modal.Body>
            <Container>
            <Row>
                
                     <Col md={6} >
            
                            <img src={"/assets/images/"+detailproduct.imgs} height="160" alt={detailproduct.imgs} />   
                       
                     </Col>
                    <Col md={6}>
                            <h5>{detailproduct.item}</h5>
                            <p > Rp.{detailproduct.price}</p>
                            <h6>Toping</h6>
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
