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
import TestPage from "./views/categories/TestPage"
import firebase from "firebase";


// import items from "categoryData";
// import {getCategoryData} from "categoryData"
// let items=[];
// // Getting data of all categories from Firebase
// function getdata(){

//       firebase.database().ref("Category").on("value",snapshot=>{
          
//         // let newCategory = []

//             snapshot.forEach((snap)=>{

//               const data = snap.val()

//               items.push({
//                 link : data.link,
//                 title : data.title,
//                 background : data.background,
//                 blog : data.blog,
//                 icon : data.icon,
//                 carousal : data.caroausal
//               })
//             // object={
//             //   link:snap.val().link,
//             //   title:snap.val().title,
//             //   background:snap.val().background,
//             //   blog:snap.val().blog,
//             //   icon:snap.val().icon,
//             //   carousal:snap.val().caroausal,
//             // }
            
//           // items.push(object);
//           })

//           // return newCategory
//   })
 

// }


// { getdata()}

// {let items = getCategoryData}





// // Getting data from firebase
var fetchedData = []
var database = firebase.database();
var ref = database.ref("Category");

 ref.on("value", gotData, errData)

function gotData(data) {
  // data.val() is an object with the keys as category names
  var categories = data.val()
  var keys = Object.keys(categories)
  
  for(var i = 0; i<keys.length; i++){
    var k = keys[i];


    var obj = {
         link : categories[k].link,
         title : categories[k].title,
         backgroundImage : categories[k].background,
         iconImage : categories[k].icon,
         carouselImages : categories[k].caroausal,
         blogs : categories[k].blog
    }
    
    
    fetchedData[i] = obj
  }

  console.log("Fetched Data" ,fetchedData)

}

function errData (err){
  console.log("Error : " + err)
}



ReactDOM.render(
  <BrowserRouter>
    <Switch>

     {/* Individual Page Route */}

      {fetchedData.map((data, key) => {
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
    

      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
