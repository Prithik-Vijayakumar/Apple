import React, { useState } from "react";
import data from "./IMacList.json";
import './ProductPage.css';
import { useNavigate } from "react-router-dom";

function IMac () {

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    };

    const [isOpen, setIsOpen] = useState(false)

    const openError = () => {
        setIsOpen(true)
    };

    const closeError = () => {
        setIsOpen(false)
    }

    return (
        <>
        <body id="product-page">
        <div id="bar-container">
        <button id="go-back" onClick={handleGoBack}><p id="arrow">←</p>Go Back</button>
        <div id="logo">
        <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
          <img id="logo-gallery" src={process.env.PUBLIC_URL + "/Images/AppleLogo.png"} alt="Apple Logo" />
        </a>
        </div>
        </div>
            <h1 id="header">iMac</h1>
        <div id="lists">
        {data.ItemList.map((imac) => (
                <div id="product-box" key={imac.src}>
                    <img id="product-image" src={process.env.PUBLIC_URL + '/Images/' + imac.src}/>
                    <p id="product-name-text" key={imac.src}>{imac.model}</p>
                        <p id="spec-detail" key={imac.src}><p id="specifications">Specifications:</p>{imac.specifications}</p>
                        <p id="price">{imac.price}</p>
                    <button id="add-to-cart" onClick={openError}>Add to Cart<img id="cart-image" src={process.env.PUBLIC_URL + "/Images/ButtonCartLogo.png"}/></button>
                </div>
        ))}
        {isOpen && (
            <div id="error">
                <div id="error-logo-container">
                    <img src={process.env.PUBLIC_URL + "/Images/AppleLogo.png"} id="error-logo" />
                    <h1 id="error-logo-text">Apple</h1>
                </div>
                <div id="error-message">
                    <p id="error-message-text">Unable to Add to Cart.</p><p id="error-message-text">The Page is in Developing Stage.</p>
                </div>
                <div id="error-button-container">
                    <button id="error-button" onClick={closeError}>Discard &times; </button>
                </div>
            </div>
        )}
        </div>
        </body>
        </>
    )
}

export default IMac;