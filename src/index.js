import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import {Switch, Route, Redirect} from "react-router-dom"

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";


import RegisterPage from "./views/examples/RegisterPage"
import Index from "./views/examples/LandingPage"
import TestPage from "./views/categories/TestPage"

// Category Page Component import
import BlogsMain from "views/categories/BlogsMain";
// Getting all the data about each individual category from firebase
import getCategoryData from "categoryData";


getCategoryData((fetchedData)=>{

  console.log("Logging fetched data in index.js");
  console.log( fetchedData)

  ReactDOM.render(
    <BrowserRouter>

      <Switch>
      
        {/* Individual Page Route */}

        {
          fetchedData.map((data, key) =>
            (
              <Route
                key={key}
                path={`/${data.link}`}

                render={(props) => (
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


            )
          )
        }


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

})