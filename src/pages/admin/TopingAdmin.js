import React from 'react'
import {useQuery} from 'react-query'
import {Container, Col, Row, Table} from 'react-bootstrap'
import {API} from '../../config/api'
import ListAdmin from '../../components/listAdmin/ListAdmin'
import NavbarAdmin from '../../components/navbar/NavbarAdmin'
import {Link} from 'react-router-dom'
import { BiXCircle, BiPencil } from "react-icons/bi";
import './home/admin.css'

function TopingAdmin() {
    const rp = require('rupiah-format')
    let api = API()
    document.title = "Dashboard Admin | Waysbukcs"
    let {data: products } = useQuery("productsCache", async () => {
        const config = {
            method: 'GET',
        }
        const response = await api.get('/topings', config);
    
        return response.data
    })

    return (
        <>
        <NavbarAdmin/>
        <Container>

        <Row>
                <Col md={4}>
                    <ListAdmin/>
                </Col>
        <Col md={8}>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Tittle</th>
      <th>Price</th>
      <th>Image</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {products?.map( (rows,idx) => 
    <tr key={idx}>
      <td>{idx+1}</td>
      <td>{rows.tittle}</td>
      <td>{ rp.convert(rows.price) }</td>
      <td>
          <img src={"http://localhost:4005/uploads/"+rows.image} alt="preview" height="60" />
      </td>
      <td>
            <Link className="togle"> <BiPencil/> </Link>
            <Link className="togle"> <BiXCircle/> </Link>
      </td>
    </tr>
        )}
   
  </tbody>
</Table>
        
        </Col>


        </Row>

        </Container>
            
        </>
    )
}

export default TopingAdmin
