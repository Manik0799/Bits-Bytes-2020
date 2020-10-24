import React, { useEffect, useState } from "react";

import { Card, CardImg, CardImgOverlay, Row, Col, Container } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import firebase from "../../firebase.js";


 function Categories()
{
  const [categorylist,setcategorylist]=useState([]);

    // Function to retreive data from firebase
    const fetchFunction = () => {
      let Categorylist = []
     
        firebase.database().ref("Category").on("value", snapshot => {

          snapshot.forEach((snap) => {
              Categorylist.push({
                link:snap.val().link,
                title:snap.val().title,
                cardImageLink : snap.val().cardImageLink
              });
            })
            
            setcategorylist(Categorylist);
            
      });
      
    }
  
   useEffect( ()=>{
     
       fetchFunction()

  },[])


    return (
      <>
      
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

          {/* Rendering all the cards */}

          <Row className="justify-content-md-center">
                {categorylist.map((data, key) => {
                  
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
                                <Fade left>
                                  
                               
                              <div key={key}>
                              {/* {console.log("Category Link - " + data.link)} */}
                                <Link to={data.link}>
                                  <Card>
                                    <CardImg
                                      src = {data.cardImageLink}
                                      style={{
                                        width: "100%",
                                        height: 300,
                                        borderRadius: 8,
                                      }}
                                    >
                                    </CardImg>
                                
                                    <CardImgOverlay
                                      style={{
                                        color: "#fff",
                                        textDecorationStyle: "double",
                                        alignContent: "flex-end",
                                        objectFit: "cover",
                                        margin: 0,
                                        backgroundColor: "rgba(0,0,0,0.35)",
                                        // backgroundImage: `url(${getimage(data.link)})`,

                                      }}
                                    >
                                    
                                      <h2 style={{ fontWeight: "400" }}>{data.title}</h2>
                                    </CardImgOverlay>
                                  </Card>
                                </Link>
                              </div>
                              </Fade>
                            </div>
                          </Col>
                        );
            })} </Row> 
            
            
         
        </Container>
      </div>
      
      
      
      </>
    )
 
}



export default  Categories;