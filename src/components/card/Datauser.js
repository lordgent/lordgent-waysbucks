import React from "react";
import { Card, Col } from "react-bootstrap";
import style from "./card.module.css";
import { Link } from "react-router-dom";
import { API } from "../../config/api";
import { useQuery } from "react-query";
// import './stylecard.css'

function Carddata() {
  const rp = require("rupiah-format");
  document.title = "Welcome waysbucks";
  let api = API();
  let { data: products } = useQuery("ProductDetailCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Beraer " + localStorage.token,
      },
    };
    const response = await api.get("/productsclient", config);

    return response.data;
  });

  console.log(products);
  return (
    <>
      {products?.map((rows, idx) => (
        <Col md={3} xs={4} key={idx}>
          <Card className={style.crd}>
            <Card.Img
              src={"http://localhost:4005/uploads/" + rows?.image}
              className={style.imgs}
              alt={rows?.image}
              width="90"
            />
            <Card.Body>
              <Card.Title className="title">{rows.tittle}</Card.Title>
              <Card.Text>{rp.convert(rows?.price)}</Card.Text>
              <Link
                to={"/client/detailc/" + rows?.id}
                className={style.btnorder}
              >
                Order
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default Carddata;
