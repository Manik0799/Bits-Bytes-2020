import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
// import CategoriesDropDown from "./CategoriesDropDown";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
 const handleEvent=()=>{
    window.scrollTo(0,0);
  }
  const handleCategory=()=>{
   

    window.scrollTo(0,window.innerHeight*1.35);
  }
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            title="Company name"
            tag={Link}
          >
            {/* <img src={require("assets/img/logo/full.png")} /> */}
            BITS & BYTES
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
          expand={true}
        >
          <Nav navbar>
            <NavItem >
              <NavLink to="/index" tag={Link} onClick={handleEvent}>
                <i className="fa fa-home" /> Home
              </NavLink>
            </NavItem>
           

            <NavItem>
              <NavLink
              to="/index"
              tag={Link}
              onClick={handleCategory}
              >
                <i className="fa fa-list-alt" />
                Categories
              </NavLink>
            </NavItem>


            <NavItem>
              <NavLink
                  data-placement="bottom"
                  href="/magazine"
                  data-toggle="tooltip" 
                  title="Watch our Latest Magazine"

                >
                
                  <i className="fa fa-book"  />
                  Our Magazine
                </NavLink>
            </NavItem>



            <NavItem >
              <NavLink
                data-placement="bottom"
                href="https://docs.google.com/forms/d/e/1FAIpQLScvhFtDIx27k8bQgSjTeDOjpwA0Y5fHFWitrcftHo4fU-TLEg/viewform"
                data-toggle="tooltip" 
                title="Buy Now Our Subscription to see Exclusive Magazine"
                target = "_blank"

              >
                <i className="fa fa-shopping-cart"  />
               Subscribe
              </NavLink>
            </NavItem>



          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;