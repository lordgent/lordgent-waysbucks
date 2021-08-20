import React,{useState,useEffect} from 'react'
import {Container ,Button, Row, Card, Col} from 'react-bootstrap'
import styledt from './detail.module.css'
import Navuser from '../../../components/navbar/Navuser'
import style from './detail.module.css'

function Detaildf({ match }) {

 
    const [detailproduct,setDetailproduct] = useState([]);
    const [toping, setToping] = useState([])
    
    
    useEffect(() => {

        const detail = fetch(`https://my-json-server.typicode.com/lordgent/fakedata/product/${match.params.id}`);
            detail.then((response) => {
                return response.json()
            })
            .then(result => {
                setDetailproduct(result)  
                setToping(result.toping)    
            } )
            .catch(err => {
                console.error(err + ' errrorrrrrr');
            })
    },[] )

console.log(toping);
    return (
        <>
          <Navuser/>
          
           <Container>
                <Card className={style.carddet}>
                    <Container>


                  
            
                <Row>

                    <Col md={6}>
                            <img src={"/assets/images/"+detailproduct.imgs} alt={detailproduct.imgs} height="320" />
                           
                    </Col>

                    <Col md={6}>
                    <h5>{detailproduct.item}</h5>
                    <p>Rp.{detailproduct.price }</p>
                    <p className={style.tp}>Toping</p>
                        <Row>
                                  
                            {toping.map((nm) =>

                                <Col className={style.coltop} key={nm.idtoping} md={3} xs={2} >
                                    <img src={"/assets/icon/"+nm.ics} height="35" />
                                    <p className={style.name}>{nm.topingname}</p>
                                </Col>

                                )}
                        </Row>

                                    <Button className={style.add}> Add </Button>
                    </Col>

                </Row>
                </Container>

                </Card>

           </Container>
            
            
                
        
        </>
    )
}

export default Detaildf;
