import React from 'react'
import {Table, Container,Row, Col,ListGroup} from 'react-bootstrap'
import NavbarAdmin from '../../../components/navbar/NavbarAdmin'
import './admin.css'
import NumberFormat from '../../../components/NumberFormat'
import ListAdmin from '../../../components/listAdmin/ListAdmin'

function HomeAdmin() {

    const tra = JSON.parse(localStorage.getItem('transaction'))
   

    return (
        <>
        <NavbarAdmin/>
        <br/>
        <Container>
            <Row>
                <Col md={4}>
                <ListAdmin/>
                </Col>

                <Col md={8} >

                <h3 className="inc">Income Transaction</h3>
                  <Container>
                        <Table className="tbl">
                        <thead>
                        <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Pas Code</th>
                        <th>Income</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tra.map((rows,idx) => 
                        
                        
                        <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{rows.fullname}</td>
                        <td>{rows.address}</td>
                        <td>{rows.pascode}</td>
                        <td className="incm">Rp.{NumberFormat( rows.subtotal)}</td>
                        <td>
                            {rows.status === false ? 
                            
                            <span className="waiting">
                                waiting approve
                            </span>
                        :

                                <span>
                                    Success
                                </span>
                        }

                        </td>
                        <td>
                            {rows.status === false ? 

                            (
                                    <>
                                    <button className="cncl">Cancel</button>
                                    <button className="appr">Approve</button>   

                                </>
                            )
   

                        :

                            <span>
                                    success
                            </span>
                        }

                        </td>
                        </tr>
                            )}

                        </tbody>
                        </Table>


</Container>



                </Col>

            </Row>
        </Container>

        
        </>
    )
}

export default HomeAdmin
