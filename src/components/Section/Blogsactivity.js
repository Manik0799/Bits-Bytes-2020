import React, {useState} from "react";

import {
 Row,Col
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
                          {data}
                          <p className="card-text">{data.text.substr(0,70) } &nbsp;....</p>
                          <p className="card-text">{data.date }</p>
                          <a  className="btn btn-primary"
                          type="button" 
                           data-toggle="modal"
                            data-target=".bd-example-modal-lg"
                            onClick = {() => setModalData(data)}
                          >Read More</a>
                        </div>
                      </div>


              </Col>
            </div>
            
          );
        })}
     
     
      </Row>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
    </>
 
 
 
 );
}

export default Blogsactivity;
