import firebase from  "firebase";

var fetchedData = [];

const getCategoryData = async (callback) => {
      //  Getting data from firebase

  const snapshot = await firebase.database().ref("Category").once("value");
 
    snapshot.forEach((snap) => {
      fetchedData.push({
        link: snap.val().link,
        title: snap.val().title,
        blogs : snap.val().blog,
        iconImage: snap.val().icon,
        backgroundImage: snap.val().background,
        carouselImages: snap.val().caroausal,
      });
      
    })
  callback(fetchedData)


}

export default getCategoryData;