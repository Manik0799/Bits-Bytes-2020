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

import fetchedData from "categoryData";


console.log(fetchedData);


ReactDOM.render(
  <BrowserRouter>

    <Switch>

     {/* Individual Page Route */}
  
    
      
      { 
        fetchedData.map((data, key) =>
        (
           <Route 
           kay={key}
           path = {data.link}
          
           render = {(props) => (
               <BlogsMain
                 input={data.blogs}
                 pagename={data.title}
                 backimage={data.backgroundImage}
                 roundimage={data.iconImage}
                 carouselData={data.carouselImages}
                 {...props}
               />
               
           )}
         />
        ))}
      
       


       
{/*    
   {fetchedData.forEach(data => {
     console.log(data)
     return(
      <Route 
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
    />)
     
   })}
 */}




    {/* Index Route */}
      <Route path="/index" render={(props) => <Index {...props} />} />
    

      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
