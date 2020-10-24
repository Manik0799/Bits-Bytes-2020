import React from "react";

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

function Blogsactivity({ blogsData }) {
 
  const arrayOfObj = Object.values(blogsData);
  var array=[];
//   function func(data)
//   {
         
//                     <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//           <div class="left-side">
//               <button type="button" class="btn btn-default btn-link" data-dismiss="modal">Never mind</button>
//           </div>
//           <div class="divider"></div>
//           <div class="right-side">
//               <button type="button" class="btn btn-danger btn-link">Delete</button>
//           </div>
//       </div>
//     </div>
//   </div>
// </div>

//   }
  return (
   
    <>
      <Row className="justify-content-md-center">
        {arrayOfObj.map((data, key) => {
          {array.push(false)}
          return (
          
            <div key={key}>
              
              {/* {data.represent=="hide"? */}
              <Col lg="4" md="6" sm="6" className="justify-content-md-center">
                <Card style={{ width: "20rem" }}>
                  <CardImgOverlay
                    style={{
                      textAlign: "left",
                      // textAlignLast: "end",
                      // textOrientation: "sideways",
                    }}
                  >
                    <Badge
                      style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        borderTopRightRadius: 5,
                      }}
                    >
                      {data.category}
                    </Badge>
                  </CardImgOverlay>
                  <div style={{
                    width:"300",
                    height:"500"
                  }}>
                    
                  <CardImg top src={data.blogimages.image1} alt={data.category}
                   />
                   </div>

                  <CardBody>
                    <CardTitle style={{ fontWeight: 400, fontSize: 16 }}>
                      {data.title}
                    </CardTitle>
                    <CardText style={{ textAlign: "left", marginTop: "12px" }}>
                      {/* {{var obj=JSON.parse(data.text)}} */}
                      {data.text.substr(0, 40)}
                      &nbsp;.....
                    </CardText>
                    <CardText className="text-left">
                      <small className="text-muted">{data.date}</small>
                    </CardText>
                    <Button color="primary" type="button"  data-toggle="modal" data-target="#exampleModalLong"
                     >
                      Read More
                    </Button>

               
                  </CardBody>
                </Card>
              </Col>
            </div>
          );
        })}
     
     
      </Row>
   
   
    </>
 
 
 
 );
}

export default Blogsactivity;
