import React from 'react'
import {ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './list.css'
function ListAdmin() {

    return ( 
        <>
              <ListGroup>
                <ListGroup.Item className="list"> <Link className="listlink" to="/admin/product">Product</Link> </ListGroup.Item>
                <ListGroup.Item  className="list">  <Link className="listlink" to="/admin/toping">Toping</Link>  </ListGroup.Item>
                <ListGroup.Item  className="list">  <Link className="listlink" to="/productadmin">List Users</Link>  </ListGroup.Item>
                </ListGroup>
        </>
    )
}
export default ListAdmin