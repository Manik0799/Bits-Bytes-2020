import React, {useState, useEffect} from "react";

import {
  Row,
  Col,
  Button, Modal, ModalHeader, ModalBody
} from "reactstrap";


function Blogsactivity({ blogsData }) {

      const arrayOfObj = Object.values(blogsData);
      arrayOfObj.reverse()

  
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
                                
                                var paraArray = Object.values(data.text)
                                blogData.push(paraArray)

                                var imageArray = Object.values(data.blogimages)
                                blogData.push(imageArray)

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
                          <p style = {{fontSize : "1.4rem"}}>{modalData[0]}</p>
                        </ModalHeader>
                        <ModalBody>
                            <Row>

                             
                                {modalData[2][0] ? <Col lg="6" md = "12" sm = "12" className = "text-center">
                                <img src= {modalData[2][0]} style = {{width : "90%", height:"90%"}} />
                                </Col> : null}

                                {modalData[2][1] ? <Col lg="6" md = "12" sm = "12" className = "text-center">
                                <img src= {modalData[2][1]} style = {{width : "90%", height:"90%"}} />
                                </Col> : null}

                                {modalData[1].map((paras) =>(
                                  
                                    <div>
                                    <p style = {{fontSize : "1rem"}}>{paras}</p>
                                    <br></br>
                                    </div>
                                   
                                  
                                ))}

                                
                              
                             
                            </Row>
                        </ModalBody>
                        
                      </Modal> : null}


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
