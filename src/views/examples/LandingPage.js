import React, { useState } from "react";

//animation library react reveal
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Categories from "components/Section/Categories";
import SectionCarousel from "../index-sections/SectionCarousel";
import InfoMain from "../../components/Section/InfoMain.js";
// Carousel Data
import LandingPageCarouselData from "../../LandingPageCarouselData";
function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const [expand, setExpand] = useState(false);
  const allMembers = () => {
    setExpand(!expand);
  };

  return (
    <>
      <div className="main">
        <ExamplesNavbar />
        <LandingPageHeader />

        {/* 3 basic info cards */}
        <InfoMain />

        {/* To display the category cards */}
        <Categories />

        {/* Carousel */}
        <SectionCarousel items={LandingPageCarouselData} />

        {/* Our Team Section */}
        <div className="section section-dark text-center">
          <Container>
            <Pulse>
              <h2 className="title">Our Team</h2>
            </Pulse>

            <Row>
              <Col lg="3" md="4" sm="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/teamImages/Nasreen.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Nasreen Chahal</CardTitle>
                      <h6 className="card-category">Founder & Editor</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/nasreenchahal/"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="mailto:chahalnasreen11@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/teamImages/Sahib.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Sahib Singh Arora</CardTitle>
                      <h6 className="card-category">
                        Design Editor & Graphic Designer
                      </h6>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/sahibsingh0019/"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="mailto:sahibarora97@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/teamImages/Ekas.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Ekas</CardTitle>
                      <h6 className="card-category">Marketing Head</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/ekas2212/"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="mailto: ekas10000@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="4" sm="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/teamImages/YODHIN.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Yodhin</CardTitle>
                      <h6 className="card-category">Creative Director</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/ghostofdavinci/"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="mailto: Yodhinaggarwal@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>

            <Fade top collapse when={expand}>
              <>
                {/* Row2 */}(
                <Row>
                  <Col lg="3" md="4" sm="6">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <img
                          alt="..."
                          src={require("assets/teamImages/Vanshika.jpg")}
                        />
                      </div>
                      <CardBody>
                        <div className="author">
                          <CardTitle tag="h4">Vanshika Bajwa</CardTitle>
                          <h6 className="card-category">Sales Manager</h6>
                        </div>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="https://www.instagram.com/vanshikabajwa_/"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col lg="3" md="4" sm="6">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <img
                          alt="..."
                          src={require("assets/teamImages/AseesPreet.jpg")}
                        />
                      </div>
                      <CardBody>
                        <div className="author">
                          <CardTitle tag="h4">Aseespreet Singh</CardTitle>
                          <h6 className="card-category">Graphic Designer</h6>
                        </div>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="https://www.instagram.com/asees66/"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col lg="3" md="4" sm="6">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <img
                          alt="..."
                          src={require("assets/teamImages/Deepanshi.jpg")}
                        />
                      </div>
                      <CardBody>
                        <div className="author">
                          <CardTitle tag="h4">Deepanshi Sharma</CardTitle>
                          <h6 className="card-category">Content Writer</h6>
                        </div>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="https://www.instagram.com/deepanshi._.sharma/"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col lg="3" md="4" sm="6">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <img
                          alt="..."
                          src={require("assets/teamImages/Srijana.jpg")}
                        />
                      </div>
                      <CardBody>
                        <div className="author">
                          <CardTitle tag="h4">Sirjana Virk</CardTitle>
                          <h6 className="card-category">Content Writer</h6>
                        </div>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="https://www.instagram.com/_sirjana_virk_/"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>

                  {/* Row 3 */}
                  <Col lg="3" md="4" sm="6">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <img
                          alt="..."
                          src={require("assets/teamImages/Simran.jpg")}
                        />
                      </div>
                      <CardBody>
                        <div className="author">
                          <CardTitle tag="h4">Simran Sohi</CardTitle>
                          <h6 className="card-category">Content Writer</h6>
                        </div>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="https://www.instagram.com/sylhet.xo/"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col lg="3" md="4" sm="6">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <img
                          alt="..."
                          src={require("assets/teamImages/Sahil Mittal.jpg")}
                        />
                      </div>
                      <CardBody>
                        <div className="author">
                          <CardTitle tag="h4">Sahil Mittal</CardTitle>
                          <h6 className="card-category">Content Writer</h6>
                        </div>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="https://www.instagram.com/sahil.121/"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                  <Col lg="3" md="4" sm="6">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <img
                          alt="..."
                          src={require("assets/teamImages/Ayushi Lakhanpal.jpg")}
                        />
                      </div>
                      <CardBody>
                        <div className="author">
                          <CardTitle tag="h4">Ayushi Lakhanpal</CardTitle>
                          <h6 className="card-category">Content Creator</h6>
                        </div>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="https://www.instagram.com/ayushi_lakhanpal/"
                        >
                          <i className="fa fa-instagram" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                )
              </>
            </Fade>
            {/* Button to expand the div */}
            {expand ? (
              <Button
                onClick={allMembers}
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
                  <i className="nc-icon nc-minimal-up" size="4x" />
                </div>
              </Button>
            ) : (
              <Button
                className="btn-fill"
                color="danger"
                size="md"
                onClick={allMembers}
              >
                See all
                <span>{"   "}</span>
                <i className="nc-icon nc-minimal-down" size="4x" />
              </Button>
            )}
          </Container>
        </div>

        {/*Feedback Section */}
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <Fade top>
                  <h2 className="text-center">Keep in touch ?</h2>
                </Fade>
                <Form className="contact-form" action = "https://formspree.io/bitsandbytes.in@gmail.com" method = "POST">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" name = "name"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" name="_replyto" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    name = "message"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg" type = "submit">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
