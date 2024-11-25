"use client"
import React, { useState } from 'react';

const HomePage = () => {
    const [showSlider, setShowSlider] = useState(false); // Toggle slider visibility
    const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range
    const [selectedOption, setSelectedOption] = useState("none"); // Dropdown value
  
    const handleSelectChange = (e) => {
      const value = e.target.value;
  
      if (value === "price-range") {
        setShowSlider(true); // Show slider when "Select Price Range" is chosen
      }
  
      setSelectedOption(value);
    };
  
    const handleSliderChange = (e, index) => {
      const newRange = [...priceRange];
      newRange[index] = parseInt(e.target.value, 10); // Update the range value
      setPriceRange(newRange);
    };
  
    const handleConfirmRange = () => {
      setShowSlider(false); // Hide slider after confirming
      setSelectedOption(`₹${priceRange[0]} - ₹${priceRange[1]}`); // Update dropdown value
    };
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
                        <div className='bg-white p-4 text-stone-800 rounded'>
                            <form >
                                <div className='flex flex-row items-center gap-5'>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">City</span>
                                        </div>
                                        <select className="select select-bordered">
                                            <option disabled selected>Pick one</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                        </select>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Location</span>
                                        </div>
                                        <select className="select select-bordered">
                                            <option disabled selected>Pick one</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                        </select>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Type</span>
                                        </div>
                                        <select className="select select-bordered">
                                            <option disabled selected>Pick one</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                        </select>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Price Range</span>
                                        </div>
                                        <select className="select select-bordered">
                                            <option disabled selected>Pick one</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                        </select>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Area</span>
                                        </div>
                                        <select className="select select-bordered">
                                            <option disabled selected>Pick one</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                        </select>
                                    </label>
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label mt-5">
                                            <span className="label-text"></span>
                                        </div>
                                        <button className='px-4 py-3 bg-blue-400 rounded text-white my-3'>Search</button>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* price range  */}
            <div style={{ width: "300px", margin: "0 auto" }}>
      {/* Dropdown */}
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="none">Select an Option</option>
        <option value="price-range">Select Price Range</option>
      </select>

      {/* Price Range Slider */}
      {showSlider && (
        <div style={{ marginTop: "10px" }}>
          <label>
            Min Price: ₹
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[0]}
              onChange={(e) => handleSliderChange(e, 0)}
            />
            {priceRange[0]}
          </label>
          <br />
          <label>
            Max Price: ₹
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => handleSliderChange(e, 1)}
            />
            {priceRange[1]}
          </label>
          <br />
          <button onClick={handleConfirmRange} style={{ marginTop: "10px" }}>
            Confirm Range
          </button>
        </div>
      )}
    </div>
            {/* price range  */}
        </div>
    );
};

export default HomePage;