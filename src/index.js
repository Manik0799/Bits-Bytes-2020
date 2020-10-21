import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";

// pages
import Index from "views/examples/LandingPage.js";

import RegisterPage from "views/examples/RegisterPage.js";

// Category Pages Import

import BlogsMain from "views/categories/BlogsMain";

import fetchedData from "categoryData"


console.log(fetchedData)

ReactDOM.render(
  <BrowserRouter>
    <Switch>

     {/* Individual Page Route */}
      { 
        fetchedData.map((data, key) => {
        return (
          <Route 
            key = {key}
            path = {data.link}
            render = {(props) => (
                <BlogsMain
                  input={data.blog}
                  pagename={data.title}
                  backimage={data.background}
                  roundimage={data.icon}
                  carouselData={data.carousal}
                  {...props}
                />
                
            )}
          />
        )
      })}
      
   
    {/* Index Route */}
      <Route path="/index" render={(props) => <Index {...props} />} />
    
<<<<<<< HEAD
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
=======
>>>>>>> 7711e4d880d6ba7b246dfc3ce809125b47d06716

      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
