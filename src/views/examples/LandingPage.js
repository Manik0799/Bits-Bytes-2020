import React, { useState } from "react";

//animation library react reveal
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

// reactstrap components
import {
  Button,
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


// Firebase
import firebase from "../../firebase"

import TeamMemberCard from "components/TeamMemberCard"
import teamMembers from "../../components/OurTeam"



function LandingPage() {
  
  document.documentElement.classList.remove("nav-open");

  const [carouselData,setCarouseldata]=useState([]);

  const [expand, setExpand] = useState(false)


  let coreTeam = teamMembers.filter((member) => member.id<5)

    // Function to retreive data from firebase
    const fetchFunction = () => {
      let sliderData = []
     
        firebase.database().ref("LandingPageSlider").on("value", snapshot => {

          snapshot.forEach((snap) => {
              sliderData.push({
                caption : snap.val().caption,
                image : snap.val().image
              });
            })
            
            setCarouseldata(sliderData);
            
      });
      
    }


  React.useEffect(() => {

    fetchFunction()
  
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };

  
   
  }, []);

  const handleExpansion = () =>{
    setExpand(!expand)
  }

  return (
  
      <div className="main"  >
        <ExamplesNavbar />
        <LandingPageHeader />

        {/* 3 basic info cards */}
        <InfoMain />

        {/* To display the category cards */}
      
        <Categories  />
     
        {/* Carousel */}
        <SectionCarousel data={carouselData} />

        {/* Our Team Section */}
        <div className="section section-dark text-center">

          <Container>

            <Pulse>
              <h2 className="title">Our Team</h2>
            </Pulse>


            {expand ? (
                <div>
                <Row>
                    {teamMembers.map((member) => (

                        <Col lg="3" md="3" sm="6" >
                            <TeamMemberCard teamMember = {member}/>
                        </Col>
                    ))}
              </Row>
              <Button
                onClick={handleExpansion}
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
               </div>
            ) : (
              <div>

                <Row>
                    {coreTeam.map((member) =>(

                            <Col lg="3" md="4" sm="6">
                            <TeamMemberCard teamMember = {member}/>
                            </Col>
                        
                    ))}

                </Row>
              
                <Button
                className="btn-fill"
                color="danger"
                size="md"
                onClick={handleExpansion}
              >
                See all
                <span>{"   "}</span>
                <i className="nc-icon nc-minimal-down" size="4x" />
              </Button>
              </div>
              
            )}

          </Container>
        </div>

        {/* Form for queries */}
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
                        <Input placeholder="Name" type="text" name = "name" required/>
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
                        <Input placeholder="Email" type="email" name="_replyto" required/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    name = "message"
                    required
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
      
        <DemoFooter />
      </div>
      
  );
}

export default LandingPage;