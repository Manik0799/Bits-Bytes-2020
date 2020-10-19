import data from "categoryData.js";
import React from "react";

import firebase from "../firebase.js";

var database=firebase.database();
function add(title,image,backimage,circleimage,link,type)
{
   var postdata={
        title:title,
        image:image,
        backimage:backimage,
        circleimage:circleimage,
        link:link,
        type:type,
   }

   // var post=database.ref().child("categories").push().key();
   var post = database.ref().child("blog").get();

   var updates={};

   updates[link]=postdata;


   return database.ref().update(updates);
}

export default add;