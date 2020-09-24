import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                  className="home__image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt=""
                />

                <div className="home__row">
                    <Product
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                        rating={3}
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood Mix Stand Mixer for 
                        Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hook and Whisk, 5 Litre
                        Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMX754RD/KMX754RD_800x600.png"
                    />
                        
                </div>

                <div className="home__row">
                     <Product 
                        id="4903850"
                        title="FB417BKBK-FRCJK Fitbit Wearable Activity Meter (Black / Black) L / S Size Fitbit Charge4 GPS Equipped Fitness Tracker Black / Black [FB417BKBKFRCJK] [Return Type A]"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
                     <Product 
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                     <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) -Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://image.yodobashi.com//product/100/000/001/005/555/515/100000001005555515_10204.jpg"
                        />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved Gaming Monitor -Super Ultra Wide Dual WQHD 5120 x 1440" 
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default Home;
