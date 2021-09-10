import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import Navuser from "../../../components/navbar/Navuser";
import style from "./detail.module.css";
import { useQuery, useMutation } from "react-query";
import { API } from "../../../config/api";
import { UserContext } from "../../../context/contextuser";
import { useHistory } from "react-router-dom";

function Detaildf({ match }) {
  const [state, dispatch] = useContext(UserContext);
  const [message, setmessage] = useState(null);
  const iduser = parseInt(state?.user.id);
  const [toping, settoping] = useState([]);
  const [checkedtop, setcheckedtop] = useState(false);

  const rp = require("rupiah-format");
  document.title = "Detail Product";
  const id = match.params.id;

  let api = API();
  let { data: detail } = useQuery(`ProductDetailCache`, async () => {
    const config = {
      method: "GET",
    };
    const response = await api.get(`/product/${id}`, config);
    return response.data;
  });

  let { data: Topings } = useQuery("topingCache", async () => {
    const config = {
      method: "GET",
    };
    const response = await api.get("/topings", config);
    return response.data;
  });

  //  add cart
  let idp = parseInt(id);

  const handlecheck = (e) => {
    settoping([...toping, parseInt(e.target.value)]);
  };

  const [form, setform] = useState({
    iduser: iduser,
    qty: 1,
    idproduct: idp,
    topings: toping,
  });

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const data = JSON.stringify(form);
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + localStorage.token,
        },
        body: data,
      };

      const response = await api.post("/cart", config);
      if (response.status === "success") {
        const alert = <Alert variant="success">1 cart created</Alert>;
        setmessage(alert);
      } else {
        const alert = (
          <Alert variant="danger">Server Error, Please Waiting... :) </Alert>
        );
        setmessage(alert);
      }
    } catch (error) {
      console.log(error);
    }
  });
  console.log(form);
  console.log(toping);
  return (
    <>
      <Navuser />

      <Container className={style.cartcontainer}>
        <Row>
          <Col md={6}>
            <img
              src={"http://localhost:4005/uploads/" + detail?.image}
              alt="imagess"
              className={style.cartimg}
              height="350"
            />
          </Col>

          <Col md={6} className={style.dtl}>
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
              {message && message}
              <input
                type="hidden"
                value={id}
                onChange={handleChange}
                name="idproduct"
              />
              <input
                type="hidden"
                value={iduser}
                onChange={handleChange}
                name="iduser"
              />
              <h1>{detail?.tittle}</h1>
              <p> {rp.convert(detail?.price)}</p>

              <p>Toping</p>
              <Row>
                {Topings?.map((top, idx) => (
                  <Col key={idx} md={3} xs={3}>
                    <center>
                      <label for="checkbox">
                        <img
                          src={"http://localhost:4005/uploads/" + top.image}
                          alt={top.image}
                          id="checkbox"
                          height="39"
                        />
                      </label>
                      <input
                        type="checkbox"
                        name="topings"
                        onChange={handlecheck}
                        value={top?.id}
                      />
                    </center>
                    <p className={style.topname}>{top.tittle}</p>
                  </Col>
                ))}
              </Row>

              <Row>
                <Col md={3}>
                  <p>Total</p>
                </Col>
                <Col md={6}>
                  <p>Rp. </p>
                </Col>
              </Row>
              <button className={style.btncart}>Add Cart</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Detaildf;
