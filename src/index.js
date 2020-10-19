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

import {
    travelBlogs,
    fashionBlogs,
    historyBlogs,
    entertainmentBlogs,
    healthBlogs,
    quizBlogs,
    horoscopeBlogs,
    lifestyleBlogs,
    weddingBlogs,
    technologyBlogs,
    covidBlogs,
    careerBlogs,
    foodBlogs,
  } from "./blogData";
  



firebase.firestore().collection("Categories").add(
    {
        id: 1,
        name: "Unpredictable Utopia",
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",
    
        link: "/travel",
        backimage: require("assets/Category-Header-Images/Travel.jpg"),
        circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
        blogs: travelBlogs,
      },
     
)



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
