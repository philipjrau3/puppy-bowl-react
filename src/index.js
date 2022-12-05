import React from "react";
import { createRoot } from 'react-dom/client';
import Form from "./components/Form";
import Main from "./components/Main";


const appElement = document.getElementById("app")

const root = createRoot(appElement)

const PuppyPower = () => { 
    
    return ( 
        <>
        <div id="new-player-form"><Form/></div>
        <div id="all-players-container"></div>
        <Main />
        </>
    )
}

root.render(<PuppyPower />)
