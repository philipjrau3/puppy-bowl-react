import React from "react";
const cohortName = '2211-ftb-et-wweb-ft';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const PuppyInfo = async (pup) => {
    const response = await fetch(`${APIURL}/players`);
    return(
        <>
        {response.map((name, id, breed, team) => {
            return(
                <div key={pup}>
                    <p>{pup.name}</p>
                    <p>{pup.id}</p>
                    <p>{pup.breed}</p>
                    <p>{pup.team}</p>
                </div>
            )
        })}
        </>
    )
}
export default PuppyInfo

