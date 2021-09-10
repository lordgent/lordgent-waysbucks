import React, { useState, useEffect, useContext } from "react";
import Navuser from "../../../components/navbar/Navuser";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./cart.css";
import { UserContext } from "../../../context/contextuser";
import { API } from "../../../config/api";
import { useQuery, useMutation } from "react-query";
import { HiTrash } from "react-icons/hi";

function Cartuser() {
  const rp = require("rupiah-format");
  const [state, dispatch] = useContext(UserContext);

  let api = API();
  const { data: cart } = useQuery("cartUserCache", async (req, res) => {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/cartuser", config);
    return response.data;
  });
  console.log(cart?.id);
  const [iduser, setiduser] = useState(null);
  const [idcart, setidcart] = useState(null);

  useEffect(() => {
    cart?.map((item) => {
      setidcart(item?.id);
    });
  }, [idcart]);

  useEffect(() => {
    cart?.map((item) => {
      setiduser(item?.user);
    });
  }, [iduser]);

  console.log(iduser);

  const [form, setform] = useState({
    name: "",
    email: "",
    nophone: "",
    pascode: "",
    pay: "",
    address: "",
    idcart: "",
    iduser: "",
    status: "waiting Approve",
  });
  console.log(cart);
  return (
    <>
      <Navuser />

      <Container className="paycart">
        <Row>
          <Col md={6} className="crtt">
            <h4 className="ti">My Cart</h4>
            <p className="rv">Review Your Order</p>
            <hr />

            {cart?.map((item, idx) => (
              <div className="cartuser" key={idx}>
                <Row>
                  <Col md={3}>
                    <img
                      src={
                        "http://localhost:4005/uploads/" + item?.Products.image
                      }
                      alt="imageproduct"
                      height="150"
                      className="crtimg"
                    />
                  </Col>
                  <Col md={6}>
                    <p className="titprd">{item?.Products.tittle}</p>
                    Toping :
                    {item?.Topings.map((top, id) => (
                      <span className="toping" key={id}>
                        {top?.tittle},
                      </span>
                    ))}
                  </Col>
                  <Col md={2}>
                    <p className="prc">{rp.convert(item?.Products.price)}</p>
                    <button className="dlt">
                      <HiTrash />
                    </button>
                  </Col>
                </Row>
              </div>
            ))}

            <hr />
            <Row>
              <Col md={6}>
                <hr />

                <p className="subtot">Sub Total :Rp. </p>
                <p>QTY : </p>
                <hr />
                <h2 className="subtot">Total</h2>
              </Col>

              <Col md={4}>
                <div className="oftr">
                  <span>Attache of transactions</span>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <Form className="forms">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Fullname"
                  className="inptcntrl"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="inptcntrl"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="No Phone"
                  className="inptcntrl"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Pas Code"
                  className="inptcntrl"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  className="inptcntrl"
                  placeholder="Address"
                  rows={3}
                />

                <input type="hidden" name="idcart" value={idcart} />
                <input type="hidden" name="iduser" value={iduser} />
              </Form.Group>

              <Button variant="primary" className="btnpay" type="submit">
                Pay
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cartuser;
