import React, {useState} from "react";

import {
  Row,
  Col,
  Button, Modal, ModalHeader, ModalBody
} from "reactstrap";


function Blogsactivity({ blogsData }) {
 
  const arrayOfObj = Object.values(blogsData);
  
  const [modal, setModal] = useState(false)
  const [modalData, setModaldata] = useState(null)

  const toggle = () =>{
    setModal(!modal)
  }

  return (
   
    <>
      <Row className="justify-content-md-center">

        {arrayOfObj.map((data, key) => {
          return (
          
            <div key={key}>
              
              <Col lg="4" md="6" sm="6" className="justify-content-md-center">

              {/* Individual Card */}
                      <div class="card" style={{width: "20rem"}}>
                      {data.blogimages.image1 ?<img className="card-img-top" src = {data.blogimages.image1} alt="card-image" /> : null}
                        
                        <div className="card-body">
                          <h4 className="card-title">{data.title}</h4>
                          <p className="card-text">{data.text.para1.substr(0,60) } &nbsp;....</p>
                          <p className="card-text">{data.date }</p>
                         
                          <Button 
                              color="danger" 
                              onClick={() =>{
                                toggle()
                                let blogData = []
                                blogData.push(data.title)
                                blogData.push(data.text)
                                blogData.push(data.blogimages)

                                setModaldata(blogData)
                            }}
                          >
                            Read Blog
                          </Button>
                        </div>
                      </div>


                      {/* Modal */}
                      {modalData ? <Modal isOpen={modal} toggle={toggle} size = "xl" scrollable = {true}>
                        <ModalHeader toggle={toggle}>
                          <h4>{modalData[0]}</h4>
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                              <Col lg="12">
                                {modalData[2].image1 ? <Col lg="6" md = "12" sm = "12" className = "align-items-md-center">
                                <img src= {modalData[2].image1} style = {{width : "90%", height:"90%"}} />
                                </Col> : null}

                                {modalData[2].image2 ? <Col lg="6" md = "12" sm = "12" className = "align-items-md-center">
                                <img src= {modalData[2].image2} style = {{width : "90%", height:"90%"}} />
                                </Col> : null}

                                {modalData[1].para1 ? <p style = {{fontSize : "1rem"}}>{modalData[1].para1}</p> : null}

                                
                                {modalData[1].para2 ? <p style = {{fontSize : "1rem"}}>{modalData[1].para2}</p> : null}
                                
                                 

                                {modalData[1].para3 ? <p style = {{fontSize : "1rem"}}>{modalData[1].para3}</p> : null}
                              </Col>
                              
                             
                            </Row>
                        </ModalBody>
                        
                      </Modal> : null}


              </Col>
            </div>
          );
        })}
     
     
      </Row>
   
   
    </>
 
 
 
 );
}

export default Blogsactivity;
