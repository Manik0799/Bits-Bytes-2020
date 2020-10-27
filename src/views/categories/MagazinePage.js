import React,{useEffect,useState} from "react";
import { Container,Card,CardImg,CardImgOverlay, Row, Col,Button, Badge } from "reactstrap";

// components to show
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import DemoFooter from "../../components/Footers/DemoFooter.js";

import firebase from "../../firebase.js";

import img from "assets/img/magazine-page-bg.jpg";

function MagazinePage() {
 
    const [magazine,setmagazine]=useState([]);

    // Function to retreive data from firebase
    const fetchFunction = () => {
      let list = []
     
        firebase.database().ref("Issues")
        .on("value", snapshot => {

          snapshot.forEach((snap) => {
              list.push({
                date : snap.val().date,
                image : snap.val().image,
                text: snap.val().text,
              });
            })

            list.reverse();
            
            setmagazine(list);
            
      });
      
    }
  
   useEffect( ()=>{
     
       fetchFunction()

  },[])

  return (
    <>

      <ExamplesNavbar />
      {/* <ProfilePageHeader /> */}

      {/* To display the page header image */}
      <div
        style={{
          backgroundImage: "url(" + img + ")",
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        // ref={pageHeader}
      >
        <div className="filter" />
      </div>

<Container>
<div style={{
       
        marginTop:"20px",
            }}>
        <Row className= "text-center">

          <Col lg="6" md="6" sm="6" className ="text-center">
        <Button  color="primary" size= "lg" target= "_blank" href= "https://pages.razorpay.com/bitsandbytesmagazine">Buy Now</Button>
        </Col>
        <Col lg="6" md="6" sm="6" className="text-center">
        <Button  color="danger" size = "lg" target= "_blank" href = "https://docs.google.com/forms/d/e/1FAIpQLScvhFtDIx27k8bQgSjTeDOjpwA0Y5fHFWitrcftHo4fU-TLEg/closedform">Subscribe</Button>
        </Col>

        </Row>
    </div>
</Container>
      
      <Container>
        <div 
      style={{
          paddingTop:50,
      }} >
        <Row>

          {magazine.map((issue, key) =>{

            return(
              <Col  lg="4" md="6" sm="12" className="ml-auto mr-auto text-center">
              
                <Card>
                    
                  
                  <CardImgOverlay
                  
                   style={{
                      textAlign: "left",
                    }}>
                       <Badge
                      style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        borderTopRightRadius: 5,
                        fontSize : "1rem"
                      }}
                    >
                      {issue.date}
                    </Badge>
                    
                  
                  </CardImgOverlay>
                  <CardImg
                  
                  src={issue.image} alt="magazine-issue-front-page" />
                </Card>
        

            </Col>
            )
                
          }

          )}
                  
          
            
        </Row>
    </div>
      </Container>
    
      <DemoFooter />
    </>

  
  
  );
}

export default MagazinePage;