import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/examples/LandingPage.js";
// import NucleoIcons from "views/NucleoIcons.js";

import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

// Category Pages Import

import BlogsMain from "views/categories/BlogsMain";
import data from "./categoryData.js";

import LandingPageCarouselData from "./LandingPageCarouselData";

import firebase from "./firebase";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      {/* <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      /> */}

      {/* Path to categories */}

      {data.map((data, key) => (
        <Route
          key={key}
          path={data.link}
          render={(props) => (
            <BlogsMain
              input={data.blogs}
              pagename={data.name}
              backimage={data.backimage}
              roundimage={data.circleimage}
              carouselData={LandingPageCarouselData}
              {...props}
            />
          )}
        />
      ))}

      {/* <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /> */}
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
