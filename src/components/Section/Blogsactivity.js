import React, {useState} from "react";

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

import Modal from "./Modal"

function Blogsactivity({ blogsData, setModalData }) {
 
  const arrayOfObj = Object.values(blogsData);
  // var array=[];
  // function func(value)
  // {
  //   return (!value);
  // }

  // const handleClick = (blogText, blogImages) => {
  //   console.log(blogText, blogImages)

      
  // }



  return (
   
    <>
      <Row className="justify-content-md-center">

        {arrayOfObj.map((data, key) => {
          {/* {array.push(false)} */}
          return (
          
            <div key={key}>
              
              {/* {data.represent=="hide"? */}
              <Col lg="4" md="6" sm="6" className="justify-content-md-center">

              {/* Individual Card */}
                      <div class="card" style={{width: "20rem"}}>
                      {data.blogimages.image1 ?<img className="card-img-top" src = {data.blogimages.image1} alt="card-image" /> : null}
                        
                        <div className="card-body">
                          <h4 className="card-title">{data.title}</h4>
                          <p className="card-text">{data.text.substr(0,70) } &nbsp;....</p>
                          <p className="card-text">{data.date }</p>
                          <a  className="btn btn-primary"
                            onClick = {() => setModalData(data)}
                          >Read More</a>
                        </div>
                      </div>


              </Col>
            </div>
          );
        })}
     
     
      </Row>
   
   
    </>
 
 
 
 );
}

export default Blogsactivity;
