import React from 'react'
import Jum from './Jum.module.css' 
import {Container, Row, Col} from 'react-bootstrap'
import imagess from '../../image/3.png'
const Jumtainer = (props) => {


    return (
        <>
          <div className={Jum.jumcontent}>
              <Container>

                <Row>
                    <Col md={6}>

                    <h1 className={Jum.jumtitle}>{props.title}</h1>

                    <p className={Jum.prom}>{props.promo}</p>
                    <p className={Jum.spn}>
                        {props.spn}
                    </p>

                    </Col>
                    <Col md={6}>
                    <img src={imagess} alt="backcaffee" className={Jum.imgs} />
                    </Col>
                </Row>

              </Container>
                
          </div>      
        </>
    )
}

export default Jumtainer
