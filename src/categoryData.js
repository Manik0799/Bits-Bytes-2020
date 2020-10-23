import firebase from  "firebase";

var fetchedData = [];

const getCategoryData = async() => {
      //  Getting data from firebase
    
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