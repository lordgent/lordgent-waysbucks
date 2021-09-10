import React, { useContext } from "react";
import Navuser from "../../../components/navbar/Navuser";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./profile.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../../config/api";
import barcode from "./barcode.png";
import lg from "./wb.png";

import { UserContext } from "../../../context/contextuser";

function Profileuser() {
  const [state, dispatch] = useContext(UserContext);

  const id = parseInt(state?.user.id);
  console.log(id);
  document.title = "Welcome waysbucks";
  let api = API();
  let { data: user } = useQuery("UserCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get(`/user/${id}`, config);

    return response.data;
  });

  let { data: transaction } = useQuery("TransactionCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get(`/transaction/${id}`, config);
    return response.datatransaction;
  });
  console.log(transaction);
  const rp = require("rupiah-format");
  return (
    <>
      <Navuser />

      <Container>
        <Row className="profile">
          <Col md={6}>
            <h5 className="pr">My profile</h5>

            <Card className="cardprofile">
              <Row>
                <Col md={4}>
                  {!user?.image ? (
                    <FaUserCircle className="notprofil" />
                  ) : (
                    <img
                      src={"http://localhost:4005/uploads/" + user?.image}
                      alt="imageproduct"
                      height="150"
                    />
                  )}
                </Col>

                <Col>
                  <p>
                    Name : <br /> {user?.fullname}
                  </p>
                  <p>
                    Email: <br /> {user?.email}
                  </p>
                  <br />
                  <Link
                    to={"/client/profile/" + state.user.id}
                    className="edtpr"
                  >
                    Edit Profile
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={6}>
            <h4 className="trs">My Transaction</h4>
            <div className="cart">
              {!transaction ? (
                <div>Not Transaction</div>
              ) : (
                transaction?.map((item) => (
                  <Row>
                    <Col md={3}>
                      <img
                        src={
                          "http://localhost:4005/uploads/" +
                          item?.Carts.Products.image
                        }
                        alt="imageproduct"
                        height="140"
                      />
                    </Col>
                    <Col md={6}>
                      <p>
                        {item?.Carts?.Products.tittle}
                        <br />
                        {item?.Carts?.Products.createdAt}
                      </p>
                      {item?.Carts?.Topings.map((top, idp) => (
                        <span className="crttop" key={idp}>
                          Toping:
                          {top?.tittle}
                        </span>
                      ))}
                      <p> Price: {rp.convert(item?.Carts?.Products.price)}</p>
                    </Col>
                    <Col md={3}>
                      <img
                        src={lg}
                        alt="logoways"
                        className="imgbg"
                        height="40"
                      />
                      <br />
                      <img
                        src={barcode}
                        alt="barcodeways"
                        className="imgbg"
                        height="50"
                      />
                      <p className="sts"> {item?.status}</p>
                    </Col>
                  </Row>
                ))
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profileuser;
