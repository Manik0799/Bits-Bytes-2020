import React, { useEffect, useState } from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import Index from "./views/examples/LandingPage"
import RegisterPage from "./views/examples/RegisterPage"
import BlogsMain from "./views/categories/BlogsMain"
import TestPage from "./views/categories/TestPage"

// import fetchedData from "./categoryData"

import firebase from "./firebase"

function App() {

    const [fetchedData, setFetchedData] = useState([])

    const getCategoryData = () => {
        //  Getting data from firebase
        var tempData = []
        
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
            
            
            tempData[i] = obj
        }

        console.log(tempData)
        setFetchedData(tempData)
        

        }

        function errData (err){
        console.log("Error : " + err)
        }


    }

    useEffect(() => {
        getCategoryData()
    }, [])


    return(
        <div>
          
            <Switch>
                
                {
                    fetchedData.map((data, key) => {
                        return(
                            <Route
                                 key = {key}
                                 path = {data.link}
                                 render = {(props) => (

                                    <TestPage />
                                    // <BlogsMain
                                    //     blogData={data.blogs}
                                    //     pagename={data.title}
                                    //     backimage={data.backgroundImage}
                                    //     roundimage={data.iconImage}
                                    //     carouselData={data.carouselImages}
                                    //     {...props}
                                        
                                    // />
                                    
                                 )} 
                            />
                        )
                    })
                }

                    {/* Index Route */}
                    <Route path="/index" render={(props) => <Index {...props} />} />
    
                    <Route
                        path="/register-page"
                        render={(props) => <RegisterPage {...props} />}
                    />
                    <Redirect to="/index" />
            </Switch>
        </div>
    )
}

export default App
