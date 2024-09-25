import React from "react";
import './Master.css'
import { useNavigate } from "react-router-dom";

function FrontPage () {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('./ProductGallery');
    }

    return (
        <>
        <div>
            <div id="page-container">
                <div id="title-box">
                <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer" id="link">
                    <div id="title-box-internal">
                <h1 id="title">
                <img src={process.env.PUBLIC_URL + "/Images/AppleLogo.png"} id="title-logo"/>
                Apple</h1>
                </div>
                </a>
                </div>
                
                <p id="para">Catalogue Website</p>
                <button id="btn-1" onClick={handleClick}>Go to Catalogue</button>
            </div>
        </div>
        </>
    )
}

export default FrontPage;