import React, { useState } from "react";

import { Card, CardImg, CardImgOverlay, Row, Col, Container } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

// Importing the data of categories
import data from "../../categoryData";

function Categories() {
  const [expand, setExpand] = useState(false);
 




  const showAllCards = () => {
    setExpand(!expand);
  };

  return (
    <div
      className="section section-dark text-center"
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Fade top>
          <h1 style={{ color: "#fff", marginBottom: "2rem", marginTop: 0 }}>
            Categories
          </h1>
        </Fade>

        <Row className="justify-content-md-center">
          {data.map((data, key) => {
            {
              /* Displaying a single card from the data array */
            }
            return (
              <Col lg="4" md="6" sm="2" className="ml-auto mr-auto">
                <div
                  style={{
                    margin: "0.5%",
                    width: "100%",
                    height: "100%",
                    objectFit: "none",
                    alignItems: "center",
                  }}
                >
                  {/* <Fade left> */}
                  <div key={key}>
                    <Link to={data.link}>
                      <Card>
                        <CardImg
                          src={data.image}
                          style={{
                            width: "100%",
                            height: 300,
                            borderRadius: 8,
                          }}
                        ></CardImg>
                        {/* <CardBody>
                        <CardText >{data.name}</CardText>
                      </CardBody> */}
                        <CardImgOverlay
                          style={{
                            color: "#fff",
                            textDecorationStyle: "double",
                            alignContent: "flex-end",
                            objectFit: "cover",
                            margin: 0,
                            backgroundColor: "rgba(0,0,0,0.35)",
                          }}
                        >
                          {/* <CardText>{data.name}</CardText>
                           */}
                          <h2 style={{ fontWeight: "400" }}>{data.name}</h2>
                        </CardImgOverlay>
                      </Card>
                    </Link>
                  </div>
                  {/* </Fade> */}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Categories;
