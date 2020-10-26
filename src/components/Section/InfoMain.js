import React from "react";

import { Row, Col, Container } from "react-bootstrap";

function InfoMain() {
  return (
    <>
      <div className="section text-center">
        <Container>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-book-bookmark" />
                </div>
                <div className="description">
                  <h4 className="info-title">Blogs</h4>
                  <p className="description">
                    Spend your time reading our informative blogs about fields
                    of your choice.
                  </p>
                </div>
              </div>
            </Col>
            

            <Col md="4">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bag-16" />
                </div>
                <div className="description">
                  <h4 className="info-title">E- Magazine</h4>
                  <p>
                    Get access to our unique and creatively designed E-magazine
                    issues.
                  </p>
                </div>
              </div>
            </Col>

            <Col md="4">
              <div className="info">
                <div className="icon icon-info">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">New Ideas</h4>
                  <p>
                    Aware yourself with new ideas presented by some of the real
                    influencers among us.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default InfoMain;
