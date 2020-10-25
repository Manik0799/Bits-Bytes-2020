import React from "react";
import { Container } from "reactstrap";

// components to show
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import DemoFooter from "../../components/Footers/DemoFooter.js";
import Blogsactivity from "components/Section/Blogsactivity";
import SectionCarousel from "../index-sections/SectionCarousel";


function BlogsMain({ input, pagename, backimage, roundimage, carouselData }) {
  

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

            {roundimage ? <div className="avatar" >
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={roundimage}
              />
            </div> : null}
                <div className="name">
              <p className="title" style = {{fontSize : "1.4rem"}}>
                {pagename}
                <br />
              </p>
            </div>
          
          </div>
            
          
          
            {/* Blog Cards */}
            {input? <Blogsactivity blogsData={input} />: null}


            {/* Carousel Display on each category page */}
            
            {carouselData?<SectionCarousel data={carouselData} />:<h5></h5>}
        </Container>
      </div>

    
      <DemoFooter />
    </>

  
  
  );
}

export default BlogsMain;