import React, { useEffect, useState } from "react";
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
import firebase from "firebase";


var items=[];
function getdata(){

      firebase.database().ref("Category").on("value",snapshot=>{
          var object;
            snapshot.forEach((snap)=>{
            object={
              link:snap.val().link,
              title:snap.val().title,
              background:snap.val().background,
              blog:snap.val().blog,
              icon:snap.val().icon,
              carousal:snap.val().caroausal,
            }
            
          items.push(object);
          })
  })
  return(
    <>
    </>
  );

}

{getdata()}

console.log(items);
ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      {/* {console.log(items)} */}
    
      {items.map((data, key) => {
        console.log(data)
      return(
        <Route
          key={key}
          path={data.link}
          render={(props) => (
            <BlogsMain
              input={data.blog}
              pagename={data.title}
              backimage={data.background}
              roundimage={data.icon}
              carouselData={data.carousal}
              {...props}
            />
          )}/>)
          })
      }

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
