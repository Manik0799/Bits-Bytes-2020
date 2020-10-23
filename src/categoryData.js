import firebase from  "firebase";

var fetchedData = [];

const getCategoryData = async() => {
      //  Getting data from firebase
    
<<<<<<< HEAD
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

      console.log("Fetched Data" ,fetchedData[0])
     

    }

    function errData (err){
      console.log("Error : " + err)
    }

}

getCategoryData()

export default fetchedData
=======
      firebase.database().ref("Category").on("value", snapshot => {

        snapshot.forEach((snap) => {
            fetchedData.push({
              link:snap.val().link,
              title:snap.val().title,
              iconimage:snap.val().icon,
              backgroundImage:snap.val().background,
              carouselImages:snap.val().caroausal,
            });
          })});

}

getCategoryData();

export default fetchedData;
>>>>>>> 9b2784b9ea112e5e1c26f2e034ab984cdd658b27
