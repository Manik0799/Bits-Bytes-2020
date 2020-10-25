import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <div >
      <footer className="footer footer-black fixed">
        <Container>
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
        </Container>
      </footer>
    </div>
  );
}

export default DemoFooter;
