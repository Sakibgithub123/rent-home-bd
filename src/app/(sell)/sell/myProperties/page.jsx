"use client"
import React, { useState } from 'react';
import Layout from '../Layout';
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosSearch } from 'react-icons/io';
const MyProperties = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const tabs = [
        { label: "For Rent", content: "This is the content for Tab 1." },
        { label: "For Sell", content: "This is the content for Tab 2." },
        { label: "Incompleted", content: "This is the content for Tab 3." },
    ];
    return (
        <Layout>
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='font-extrabold text-2xl  text-stone-700 p-8'> My Properties</h1>
                    <button className='flex items-center gap-1 bg-green-600 px-4 py-2 text-white'><FaPlus /><Link href={'/sell/addProperty'}>Add Property</Link></button>
                </div>
                <div>
                    <div className="w-full">
                        {/* Tab Headers */}
                        <div className='w-full border-b'>
                            <div className="flex  w-4/12">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`flex-1 py-2 text-center ${activeTab === index
                                            ? "border-b-2 border-green-500 text-green-400 font-semibold"
                                            : "text-gray-500 hover:text-green-500"
                                            }`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* dropdown  */}
                        <div className="relative inline-block w-full text-left my-4">
                            {/* Dropdown Button */}
                          <div className='flex justify-between'>
                          <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="px-4 py-2 w-24 bg-white  border text-gray-500 focus:outline-none"
                            >
                                All
                            </button>
                           <div  className="border bg-white px-4 py-3 focus:outline-none rounded-none">
                           <input
                                // {...register("locationDetails", {
                                //     required: "Location Details is required",
                                // })}
                                type="text"
                                placeholder="Search here ..."
                                className="border-none  focus:outline-none rounded-none"
                            />
                             <button  className="border-none  focus:outline-none rounded-none"><IoIosSearch className='text-green-500 text-xl' /></button>
                           </div>
                          </div>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute  mt-2 w-24 bg-white  shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-700 ease-in-out origin-top-right ${isOpen ? "translate-y-0 collapse" : " -translate-y-full invisible pointer-events-none"
                                    }`}
                            >
                                <ul className="py-1">
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            All
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Active
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Pending
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="p-4">
                            <p>{tabs[activeTab].content}</p>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default MyProperties;