import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

// core component
import img from "assets/img/landing-bg.jpg";



function LandingPageHeader() {

//  let pageHeader = React.createRef();


  // useEffect(() => {
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
    
    
  // }, []);

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
          <Row xs="2">

            <Col lg="6" md="6" sm="12" style={{justifyContent:"center",alignContent:"center"}}>
              <div className="motto">
                <h1>Deploying on netlify</h1>
                <h3>
                  Trying to motivate and inspire everyone we come across, by
                  presenting some of the real influencers among us.
                </h3>
                <br />
              </div>
            </Col>

            {/* To showcase the recent magazine issue */}
            <Col lg="6" md="6" sm="12" className = "text-center">
                {/* <Card>

                <CardImg
                    src={cardimage} alt="magazine-issue-front-page" />
                  <CardImgOverlay
                   style={{
                      textAlign: "left",
                    }}>
                       
                  </CardImgOverlay>
                  
                    
                    
                </Card>
                <Button color = "danger" size = "lg">See our issues</Button> */}

                {/* <div className="card text-center ml-auto mr-auto" style={{width: "70%",height:"70%"}}>
           
                      <img className="card-img-top" src = {cardimage} alt="card-image" />
                        
                          <Button 
                              color="danger"   
                          >
                            See our issues
                          </Button>
                    
                      </div> */}
                
            </Col>

          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
