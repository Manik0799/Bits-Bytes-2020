import firebase from  "firebase";

var fetchedData = []

const getCategoryData = () => {
      //  Getting data from firebase
    
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