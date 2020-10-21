// import React,{useEffect} from "react";
// import React from "react"
import firebase from  "firebase";


// var items=[];
// const list=()=>{
//      useEffect(()=>{
//         firebase.database().ref("Category").on("value",snapshot=>{
//             var object;
//               snapshot.forEach((snap)=>{
//               object={
//                 link:snap.val().link,
//                 title:snap.val().title,
//                 background:snap.val().background,
//                 blog:snap.val().blog,
//                 icon:snap.val().icon,
//                 carousal:snap.val().caroausal,
//               }
              
//             items.push(object);
//             })
//      },[])

// });

// }

// list();

// export default items;


export function getCategoryData() {
      firebase.database().ref("Category").on("value",snapshot=>{
            var items = []

            snapshot.forEach((snap)=>{
              const data = snap.val()

              items.push({
                link : data.link,
                title : data.title,
                background : data.background,
                blog : data.blog,
                icon : data.icon,
                carousal : data.caroausal
              })
            
          })

          return items
  })

  
}
