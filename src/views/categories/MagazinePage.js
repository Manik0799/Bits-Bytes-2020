import React,{useEffect,useState} from "react";
import { Container,Card,CardImg,CardImgOverlay,CardText,CardTitle, Row, Col,Button } from "reactstrap";

// components to show
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import DemoFooter from "../../components/Footers/DemoFooter.js";
import Blogsactivity from "components/Section/Blogsactivity";

import firebase from "../../firebase.js";

import img from "assets/img/bruno-abatti.jpg";
import { Link } from "react-router-dom";
function MagazinePage() {
 
    const [magazine,setmagazine]=useState([]);

    // Function to retreive data from firebase
    const fetchFunction = () => {
      let list = []
     
        firebase.database().ref("Issues").on("value", snapshot => {

          snapshot.forEach((snap) => {
              list.push({
              
                Image : snap.val().image,
                text: snap.val().text,
              });
            })
            
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
    <div style={{
        marginLeft:"50px",
        marginTop:"20px",
    }}>
        <Row>
            <Col lg="4" md="6" sm="12" className="ml-auto mr-auto">
        <Button className="btn-round" color="danger"
        style={{
            padding:"50px",
            fontSize:"32px"
        }}>BUY NOW</Button>
        </Col>
        <Col lg="4" md="6" sm="12" className="ml-auto mr-auto">
        
        <Button className="btn-round" color="danger"
         style={{
            padding:"50px",
            fontSize:"32px"
        }}>Subscribe</Button>
        </Col>
        </Row>
    </div>
      
      <div 
      style={{
          paddingTop:50,
      }} >
    <Row>
        <Col  lg="4" md="6" sm="12" className="ml-auto mr-auto">
            <Link to="/" tag={Link}>
          <div>
      <div>
      <Card inverse>
          <div className="filter"/>
        <CardImg
        style={{
            width:"300",
            height:"300"
        }}
        src={require("../../../src/assets/img/placeholder.jpg")} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <Button className="btn-round" color="danger" style={{
            justifySelf:"end"
        }} >
            BUY NOW
        </Button>
        </CardImgOverlay>
      </Card>
    </div>
      </div>
      </Link>
        </Col>
    </Row>
    </div>
    
      <DemoFooter />
    </>

  
  
  );
}

export default MagazinePage;