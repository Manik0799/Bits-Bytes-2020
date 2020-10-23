import React from "react";
import { Container } from "reactstrap";

// core components
// import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import DemoFooter from "../../components/Footers/DemoFooter.js";
import Blogsactivity from "components/Section/Blogsactivity";

import SectionCarousel from "../index-sections/SectionCarousel";

// { blogData, pagename, backimage, roundimage, carouselData }

function BlogsMain({pagename}) {
  console.log(pagename)
  return (
    <h1>Blog main {pagename}</h1>
    // <>
    
    //   <ExamplesNavbar />
    //   {/* <ProfilePageHeader /> */}

    //   {/* To display the page header image */}
    //   {/* <div
    //     style={{
    //       backgroundImage: "url(" + backimage + ")",
    //     }}
    //     className="page-header page-header-xs"
    //     data-parallax={true}
    //     // ref={pageHeader}
    //   >
    //     <div className="filter" />
    //   </div> */}

    //   <div className="section profile-content">
    //     <Container>
    //       <div className="owner">
    //         <div className="avatar">
    //           <img
    //             alt="..."
    //             className="img-circle img-no-padding img-responsive"
    //             src={roundimage}
    //           />
    //         </div>
    //         <div className="name">
    //           <h4 className="title">
    //             {pagename}
    //             <br />
    //           </h4>
    //         </div>
    //       </div>

    //       {/* Blog Cards */}
    //       <Blogsactivity blogsData={blogData} />

    //       {/* Carousel Display on each category page */}
    //       <SectionCarousel items={carouselData} />

    //       <DemoFooter />
    //     </Container>
    //   </div>
    
    
    // </>
  
  
  
  );
}

export default BlogsMain;
