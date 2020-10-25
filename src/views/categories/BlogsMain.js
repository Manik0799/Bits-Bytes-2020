import React, {useState} from "react";
import { Container } from "reactstrap";

// components to show
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import DemoFooter from "../../components/Footers/DemoFooter.js";
import Blogsactivity from "components/Section/Blogsactivity";
import SectionCarousel from "../index-sections/SectionCarousel";

import Modal from "../../components/Section/Modal"

function BlogsMain({ input, pagename, backimage, roundimage, carouselData }) {
 

  const [modalData, setModalData] = useState(null)

  return (
    <>

      <ExamplesNavbar />
      {/* <ProfilePageHeader /> */}

      {/* To display the page header image */}
      <div
        style={{
          backgroundImage: "url(" + backimage + ")",
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        // ref={pageHeader}
      >
        <div className="filter" />
      </div>

      <div className="section profile-content">
        <Container>
          <div className="owner">
            {/* <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={roundimage}
              />
            </div> */}
            <div style={{
              height:"100%",
            }}>
            <div className="name">
              <h4 className="title">
                {pagename}
                <br />
              </h4>
            </div>
          </div>
          
          {/* Blog Cards */}
          {input? <Blogsactivity blogsData={input} setModalData = {setModalData} />: null}


            {modalData && <Modal data = {modalData}/>}

          {/* Carousel Display on each category page */}
          
          {carouselData?<SectionCarousel data={carouselData} />:<h5></h5>}
          </div>
        </Container>
      </div>

    
      <DemoFooter />
    </>

  
  
  );
}

export default BlogsMain;