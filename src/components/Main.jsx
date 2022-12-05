import React from "react";
import { createRoot } from "react-dom/client";
import AllPuppies from "./AllPuppies";

const dummyPuppyData = [{"id":10003,"name":"GoodBoy","breed":"Dog","status":"bench","imageUrl":"https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png","createdAt":"2022-12-04T16:36:57.702Z","updatedAt":"2022-12-04T16:36:57.702Z","teamId":532,"cohortId":283},{"id":9989,"name":"Rex","breed":"Shiba Inu","status":"bench","imageUrl":"https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400","createdAt":"2022-12-04T05:08:33.131Z","updatedAt":"2022-12-04T05:08:33.131Z","teamId":532,"cohortId":283}
]


const Main = () => {
    return (
        <div>
            <h1>Puppy Bowl 2022</h1>
            
            
            <AllPuppies puppy={dummyPuppyData[0]}/>
            <AllPuppies puppy={dummyPuppyData[1]}/>
      
       
            </div>
    )
}
export default Main