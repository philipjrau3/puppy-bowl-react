import React from "react";

const AllPuppies = (props) => {
    console.log(props)
    return (
        <div>
            <h1>All the puppies!</h1>
            <h2>Name: {props.puppy.name}</h2>
            <p>ID: {props.puppy.id}</p>
            <p>Breed: {props.puppy.breed}</p>
            <p>Status: {props.puppy.status}</p>
            <img src={props.puppy.imageUrl}/>
            </div>
    )
}
export default AllPuppies