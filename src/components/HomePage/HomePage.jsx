// "use client"
// import React, { useState } from 'react';
import Feature from '../Feature/Feature';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import TypeOfProperties from '../TypeOfProperties/TypeOfProperties';
import ServiceDetails from './ServiceDetails';
import OurClient from './OurClient';
import AddProperty from '../AddProperty/AddProperty';
import SeeDetails from '../SeeDetails/SeeDetails';

const HomePage = () => {
    
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(/images/img2.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-full">
                        <h1 className="mb-5 text-5xl font-bold">Seeking Your Space?</h1>
                        <h1 className="mb-5 text-3xl font-bold">Property Awaits in Dhaka!</h1>
                        <p className="mb-5">
                            We’ve more than 745,000 apartments, place & plot.
                        </p>
                        {/* dropdown  */}
                        <FilterDropdown/>
                    </div>
                </div>
            </div>
            {/* price range  */}
    
            {/* price range  */}
            <TypeOfProperties/>
            <Feature/>
            <ServiceDetails/>
            <OurClient/>
            {/* <AddProperty/> */}
            {/* <SeeDetails/> */}
        </div>
    );
};

export default HomePage;