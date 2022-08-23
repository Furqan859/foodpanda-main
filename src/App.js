import React from "react";
import './App.css';

function App() {
    return (
        <div>

            <div className="top-section">
                <img src="header.png" alt="logo"/>
                <h2>Do you need a business?</h2>
                <button>SIGN UP NOW</button>
                <i className="fas fa-times"/>


            </div>

            <nav className="navigation">

                <img src="foodpanda-logo.png" alt="logo"/>
                <button>EN</button>
                <button><i className="fas fa-sign-in-alt"/> LOG IN</button>
                <button><i className="fas fa-shopping-cart"/></button>

            </nav>


            <div className="main">
                <div className="bg-img"/>
                <h1>It's the food and groceries you love,<br/>delivered</h1>
            </div>

            <div className="input-buttons">
                <input className="input" required="required" placeholder="Enter your full address"/>
                <span className="location-icon"><i className="fa-regular fa-location-dot"/></span>
                <button className="delivery-button">DELIVERY</button>
                <span className="spacing">or</span>
                <button className="pickup-button">PICK-UP</button>
            </div>

            <div className="section">

                <div className="section-background"><h1>Partners</h1></div>

                <span className="section-text">You prepare the food, we handle the rest</span>

            </div>

            <div className="vendor-setting">
                <div className="home-vendor-image"/>
                <div className="home-vendor-text">
                    <h2 className="vendor-heading">List your restaurant or shop on foodpanda </h2>
                    <p className="vendor-para">Would you like millions of new customers to enjoy your amazing food and
                        groceries? So would we! It's simple: we list your menu and product lists online, help you
                        process orders, pick them up, and deliver them to hungry pandas – in a heartbeat! Interested?
                        Let's start our partnership today! </p>
                    <button className="get-started">GET STARTED</button>
                </div>
            </div>


            <div className="main-cities-div">
                <div className="cities-list">Cities</div>
                <div className="find-cities">Find us in these cities and many more!</div>
            </div>

            <div className="city-list-wrapper">
                    <ul className="city-list">
                        <li>
                            <div className="all-image"/>
                            <span className="city-title-karachi">Karachi</span>
                            <span className="city-first-letter">K</span>
                            <span className="action-errow-button"><i className="fa-solid fa-arrow-right"/></span>
                        </li>
                    </ul>
            </div>


        </div>


    );
}

export default App;



