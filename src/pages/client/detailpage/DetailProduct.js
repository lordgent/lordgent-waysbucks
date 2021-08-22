import React,{useState,useEffect} from 'react'
import {Container ,Button, Row, Card, Col, Form} from 'react-bootstrap'
import Navuser from '../../../components/navbar/Navuser'
import style from './detail.module.css'


function Detaildf({ match }) {


    let us = JSON.parse(localStorage.getItem('userlogin'))


    const id = match.params.id    
 
    const [detailproduct,setDetailproduct] = useState([]);
    const [toping, setToping] = useState([])
    

    // ============ cart state ============

        const [cektop,setcektop] = useState('')
        
        
        //============ ========================
        
        const [fixcart, setfixcart] = useState([])

    useEffect(() => {

        const detail = fetch(`https://my-json-server.typicode.com/lordgent/fakedata/product/`+id);
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


    } )



    const addcart = (e) => {

        e.preventDefault()
        us.foreach((rows,idx) => {

            

        const cartu = {
                id: rows.id,
                nameuser: rows.name,
                nameproduct: detailproduct.item,
                priceprd: detailproduct.price,
                qty: 1,
                top: cektop,
                date: Date()
            }
           setfixcart([...fixcart, cartu])
           
           
        })

        localStorage.setItem('cartuser', JSON.stringify(fixcart))
        


    }
   



   
    return (
        <>
          <Navuser/>
          
           <Container>
                <Card className={style.carddet}>
                    <Container>
        
                <Row>

                    <Col md={6}>
                     <img src={"/assets/images/"+detailproduct.imgs} alt={detailproduct.imgs} height="400" />
                           
                    </Col>

                    <Col md={6}>
                    <h5>{detailproduct.item}</h5>
                    <p>Rp.{ detailproduct.price }</p>
                    <p className={style.tp}>Toping</p>
                    <Form onSubmit={addcart} >
               
                        <Row>
                                  
                            {toping.map((nm,idx) =>

                                <Col className={style.coltop} key={idx} md={3} xs={2} >
                                    <img src={"/assets/icon/"+nm.ics} height="35" alt="icontop" />
                                    <input onChange={(e) => setcektop(e.target.value)} type="checkbox" value={nm.topingname} className={style.tpi} />
                                    <p className={style.name}>{nm.topingname}</p>
                                </Col>

                                )}
                        </Row>  
                                <p></p>
                                <h6 className={style.tot}> Total : Rp. {detailproduct.price} </h6>
                                {/* <input type="hidden" value={detailproduct.item} /><br/>
                                <input type="hidden" value={detailproduct.price} /> */}
                                    <Button type="submit" className={style.add}> Add </Button>
                        </Form>
                    </Col>

                </Row>
                </Container>

                </Card>

           </Container>
            
            
                
        
        </>
    )
}

export default Detaildf;
