import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <div>
        <Container >
      <footer className="footer footer-black" >
      
          <Row>
            <nav className="footer-nav fixed">
              <ul>
                <li>
                  <a href="mailto:bitsandbytes.in@gmail.com" >
                    <i className="fa fa-envelope-o fa-2x" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bitsandbytes.in/"
                  
                  >
                    <i className="fa fa-instagram fa-2x" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span>
                © {new Date().getFullYear()} Bits & Bytes with{" "}
                <i className="fa fa-heart heart" /> for You.
              </span>
            </div>
          </Row>
      </footer>
      
      </Container>
    </div>
  );
}

export default DemoFooter;
