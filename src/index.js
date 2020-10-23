import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";


import App from "./App"

<<<<<<< HEAD

ReactDOM.render(
  <BrowserRouter>
      <App />
=======
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
        {
          console.log(data)
          return(
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
         />)
          
        }
        )}
      
       


       
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
>>>>>>> 9b2784b9ea112e5e1c26f2e034ab984cdd658b27
  </BrowserRouter>,
  document.getElementById("root")
);
