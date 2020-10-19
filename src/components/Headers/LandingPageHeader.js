import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";
// core component

import img from "assets/img/bruno-abatti.jpg";

function LandingPageHeader() {
  // let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth < 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });

  return (
    <>
      <div
        className="page-header"
        // ref={pageHeader}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="filter" />
        <Container>
          {/* <UncontrolledCarousel items={items} /> */}
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="motto">
                <h1>Bits & Bytes.</h1>
                <h3>
                  Trying to motivate and inspire everyone we come across, by
                  presenting some of the real influencers among us.
                </h3>
                <br />

                {/* <Button
              // implement scroll to next div
              onClick={window.scrollBy(0, 500)}
              className="btn-round"
              style={{
                borderRadius: "50%",
                width: 50,
                height: 50,
                alignItems: "center",
              }}
              color="neutral"
              type="button"
              outline
            >
              <div>
                <i className="nc-icon nc-minimal-down" size="4x" />
              </div>
            </Button> */}
              </div>
            </Col>

            {/* To showcase the recent blogs */}
            <Col lg="6" md="6" sm="12">
              {/* Show recent blog cards */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
