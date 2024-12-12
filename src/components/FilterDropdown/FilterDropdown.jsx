"use client"
import React, { useState } from 'react';

function formatPrice(price) {
    if (price >= 100000) {
        return `${(price / 100000).toFixed(2)} Lac`;
    } else if (price >= 1000) {
        return `${(price / 1000).toFixed(2)} K`;
    }
    return `${price}`;
}

const FilterDropdown = () => {
    const [open, setOpen] = useState(false);
    const [minPrice, setMinPrice] = useState(800000);
    const [maxPrice, setMaxPrice] = useState(140000);
    const [openArea, setOpenArea] = useState(false);
    const [minArea, setMinArea] = useState(1000);
    const [maxArea, setMaxArea] = useState(6000);
    const handleFilter = (e) => {
        e.preventDefault()
    }
    
    return (
        <div>
            <div className='bg-white p-4 text-stone-800 rounded'>
                <form onSubmit={handleFilter} >
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
                                <span className="label-text">Price Range(BDT)</span>
                            </div>
                            {/* price range  */}
                            <div className="relative inline-block w-72">
                                {/* Dropdown Input */}
                                {/* <button
                                    onClick={() => setOpen(!open)}
                                    className="w-full px-4 py-2 select text-left bg-white border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    {`${formatPrice(minPrice)} - ${formatPrice(maxPrice)} BDT`}
                                    {`Price Range: $${minPrice} - $${maxPrice}`}
                                </button> */}
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <div className="flex items-center space-x-2">
                                        {/* Minimum Area Input */}
                                        <input
                                            type="text"
                                            value={formatPrice(minPrice)}
                                            placeholder="Type here"
                                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        />
                                        <span>-</span>
                                        {/* Maximum Area Input */}
                                        <input
                                            type="text"
                                            value={formatPrice(maxPrice)}
                                            placeholder="Type here"
                                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        />
                                        <span className='text-xs'>BDT</span>
                                    </div>
                                </button>


                                {/* Dropdown Menu with Slider */}
                                {open && (
                                    <div className="absolute z-50 w-full p-4 mt-2 bg-white border border-gray-300 rounded shadow">
                                        {/* Min Price Slider */}
                                        <div>
                                            <label className="block text-sm text-gray-600">Min Price: {minPrice}</label>
                                            <input
                                                type="range"
                                                min="800000"
                                                max={maxPrice}
                                                value={minPrice}
                                                onChange={(e) => setMinPrice(parseInt(e.target.value))}
                                                className="w-full mt-1 accent-indigo-500"
                                            />
                                        </div>

                                        {/* Max Price Slider */}
                                        <div className="mt-4">
                                            <label className="block text-sm text-gray-600">Max Price: {maxPrice}</label>
                                            <input
                                                type="range"
                                                min={minPrice}
                                                max="200000"
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                                className="w-full mt-1 accent-indigo-500"
                                            />
                                        </div>

                                        {/* Close Button */}
                                        <button
                                            onClick={() => setOpen(false)}
                                            className="w-full px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-600"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* price range  */}
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Area(Sq feet)</span>
                            </div>
                            {/* area  */}
                            <div className="relative inline-block w-72">
                                {/* Dropdown Input */}
                                {/* <button
                                    onClick={() => setOpenArea(!openArea)}
                                    className="w-full px-4 py-2 select text-left bg-white border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    {`${formatPrice(minArea)} - ${formatPrice(maxArea)} Sq Feet`}
                                </button> */}
                                <button
                                    onClick={() => setOpenArea(!openArea)}
                                    className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <div className="flex items-center space-x-2">
                                        {/* Minimum Area Input */}
                                        <input
                                            type="text"
                                            value={formatPrice(minArea)}
                                            placeholder="Type here"
                                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        />
                                        <span>-</span>
                                        {/* Maximum Area Input */}
                                        <input
                                            type="text"
                                            value={formatPrice(maxArea)}
                                            placeholder="Type here"
                                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        />
                                        <span className='text-xs'>Sq Feet</span>
                                    </div>
                                </button>


                                {/* Dropdown Menu with Slider */}
                                {openArea && (
                                    <div className="absolute z-50 w-full p-4 mt-2 bg-white border border-gray-300 rounded shadow">
                                        {/* Min Price Slider */}
                                        <div>
                                            <label className="block text-sm text-gray-600">Min Area: {minArea.length} k</label>
                                            <input
                                                type="range"
                                                min="0"
                                                max={maxArea}
                                                value={minArea}
                                                onChange={(e) => setMinArea(parseInt(e.target.value))}
                                                className="w-full mt-1 accent-indigo-500"
                                            />
                                        </div>

                                        {/* Max Price Slider */}
                                        <div className="mt-4">
                                            <label className="block text-sm text-gray-600">Max Area: {maxArea} k</label>
                                            <input
                                                type="range"
                                                min={minArea}
                                                max="2000"
                                                value={maxArea}
                                                onChange={(e) => setMaxArea(parseInt(e.target.value))}
                                                className="w-full mt-1 accent-indigo-500"
                                            />
                                        </div>

                                        {/* Close Button */}
                                        <button
                                            onClick={() => setOpenArea(false)}
                                            className="w-full px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-600"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                )}
                            </div>
                            {/* area  */}
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
    );
};

export default FilterDropdown;