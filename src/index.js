import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";

import {Switch, Route, Redirect} from "react-router-dom"


import RegisterPage from "./views/examples/RegisterPage"
import Index from "./views/examples/LandingPage"

import TestPage from "./views/categories/TestPage"
// import App from "./App"

// Category Pages Import

import BlogsMain from "views/categories/BlogsMain";

import fetchedData from "categoryData";


const data = [
  {
    id: 1,
    name: "Unpredictable Utopia",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",

    link: "/travel",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    
  },
  {
    id: 2,
    name: "Bold is the new beautiful",
    image:
      "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80",
    link: "/fashion",
    backimage: require("assets/Category-Header-Images/fashion.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
   
  },
  
];

console.log(fetchedData);



ReactDOM.render(
  <BrowserRouter>

    <Switch>

     {/* Individual Page Route */}
  
      {/* {fetchedData} */}
      
      { 
        fetchedData.map((data, key) =>
        (
           <Route 
           key={key}
           path = {data.link}
          
           render = {(props) => (
              //  <BlogsMain
              //   //  input={data.blogs}
              //    pagename={data.title}
              //   //  backimage={data.backgroundImage}
              //   //  roundimage={data.iconImage}
              //   //  carouselData={data.carouselImages}
              //   //  {...props}
              //  />
              <TestPage />
               
           )}
         />
         
          
        )
        )
        }
      
       


       
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
