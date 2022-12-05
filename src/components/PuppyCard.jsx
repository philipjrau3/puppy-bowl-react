import React from "react";

const PuppyCard = ({ id, name, breed, imageUrl }) => {
    return (
        <>
        <div>
            <h1>(name)</h1>
            <h2>(id)</h2>
        </div>
        <div>
            <h3>(breed)</h3>
            <img src={imageUr} alt=""/>
        </div>
        </>
    );
};