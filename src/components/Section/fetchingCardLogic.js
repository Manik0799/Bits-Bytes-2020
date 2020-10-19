import firebase from "../../firebase.js";

let Categorylist = [];
var storage=firebase.storage();
        firebase.database().ref("Category").on("value", snapshot => {
        snapshot.forEach((snap) => {
       
          storage.ref().child(`Category/${snap.val().link}/Card.jpg`).getDownloadURL().then((url)=>{

            var object={
              imageurl:url,
              link:snap.val().link,
              title:snap.val().title,
            }
          Categorylist.push(object);

           }).catch((error)=>{
             console.log(error);
           })
         
      });
      });

export default Categorylist;