import React,{useState,useEffect} from 'react'
import {Container, Card, Row,Col, Form} from 'react-bootstrap'
import Navuser from '../../../components/navbar/Navuser'
import style from './detail.module.css'
import Product from '../../../datajson/Product'


function Detaildf({ match }) {

    let user = JSON.parse(localStorage.getItem('userlogin'))

    function fixcart() {

        let crt  = localStorage.getItem('mycart');

        if(crt) {
            return JSON.parse(crt)
        } else {

           return []
        }

    }

        // ================
        const [toping,settoping] = useState([])
        const id = match.params.id  

        useEffect( () => {

            Product.filter(top => top.id === id ).forEach(res => {
        
                settoping(res.toping)
               
            })    

        } )

        const [cart, setcart] = useState(fixcart())
       

        // ================
       
        useEffect(() => {
             
        localStorage.setItem('mycart', JSON.stringify(cart))

    },[cart])

    const handlecart = (e)  => {

        e.preventDefault()
        Product.filter(hndl => hndl.id === id ).forEach(result => {
                user.forEach(rows => {

                    let obj = {
                        name: rows.name,
                        email: rows.email,
                        nameitem: result.item,
                        img: result.imgs,
                        price: result.price,
                        qty: 1,
                        date: Date()
        
                    }


                    setcart([...cart, obj])
                })
                
                
         

        } )
    
} 

    return (
        <>
          <Navuser/>
          
           <Container className={style.cartcontainer}>


                {Product.filter(rows => rows.id === id ).map((result) => 

                        <Row>

                            <Col md={6}>
                            
                                <img src={"/assets/images/"+result.imgs} alt={result.imgs} className={style.cartimg} height="350" />
                            </Col>

                        <Col md={6}>


                                <Card className={style.card}>

                                   <Form onSubmit={handlecart}>                                       
                               
                                    <h1>{result.item}</h1>
                                    <p>RP. {result.price}</p>
                                    <p>Toping</p>
                                    <Row>
                                    {toping.map((top,idt) => 

                                        
                                        <Col key={idt} md={3}>
                                                <center>

                                            <img src={"/assets/icon/"+top.ics} alt="iconstop" height="39" />                                                
                                                </center>
                                            <input type="checkbox" className={style.cektop} value={top.topingname} />
                                            <p className={style.topname}>{top.topingname}</p>
                                        </Col>


                                    )}
                                    </Row>
                                    <h4>Total : </h4>

                                    <button className={style.btncart}>Add Cart</button>
                                    </Form> 
                                </Card>
                        
                        </Col>


                        </Row>
                    
                
                ) }
      
           </Container>
        
        </>
    )
}

export default Detaildf;
