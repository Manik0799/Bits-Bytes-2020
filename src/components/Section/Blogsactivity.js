import React from "react";

import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
  CardImgOverlay,
  Badge,
} from "reactstrap";

function Blogsactivity({ blogsData }) {
  return (
    <>
    
      <Row className="justify-content-md-center">
        {blogsData.map((data, key) => {
          return (
            <div key={key}>
              {/* {data.represent=="hide"? */}
              <Col lg="4" md="6" sm="6" className="justify-content-md-center">
                <Card style={{ width: "20rem" }}>
                  <CardImgOverlay
                    style={{
                      textAlign: "left",
                      // textAlignLast: "end",
                      // textOrientation: "sideways",
                    }}
                  >
                    <Badge
                      style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        borderTopRightRadius: 5,
                      }}
                    >
                      {data.category}
                    </Badge>
                  </CardImgOverlay>
                  <CardImg top src={data.image} alt={data.category} />

                  <CardBody>
                    <CardTitle style={{ fontWeight: 400, fontSize: 16 }}>
                      {data.title}
                    </CardTitle>
                    <CardText style={{ textAlign: "left", marginTop: "12px" }}>
                      {/* {{var obj=JSON.parse(data.text)}} */}
                      {data.text.substr(0, 40)}
                      &nbsp;.....
                    </CardText>
                    <CardText className="text-left">
                      <small className="text-muted">{data.date}</small>
                    </CardText>
                    <Button color="primary">
                      {data.represent === "hide" ? "Read more" : "Read less"}
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </div>
          );
        })}
      </Row>
    </>
  );
}

export default Blogsactivity;
