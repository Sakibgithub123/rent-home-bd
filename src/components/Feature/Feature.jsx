"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BiBath } from 'react-icons/bi';
import { FaBed } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { LiaBedSolid, LiaReact } from 'react-icons/lia';
import { MdOutlineBalcony } from 'react-icons/md';

const Feature = () => {
    const [features, setFeatures] = useState([])
    async function getFeature() {
        try {
            const response = await axios.get('http://localhost:3000/features/api');
            console.log(response.data);
            setFeatures(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getFeature()
    }, [])

    return (
        <div className='my-10'>
            <h1 className="text-2xl font-bold mb-6">Featured Properties</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    features.slice(0, 6).map((property) => 
                       <>
                        <div className='bg-base-200'>
                            <div className='relative'>
                                <Image alt='image' className='w-full' src={'/images/img2.jpg'} width={200} height={200} />
                                <p className='absolute top-4 bg-blue-400 py-1 px-2 left-2 text-white text-sm'>For {property.postType}</p>
                                <p className='absolute top-4 right-4 bg-stone-400 py-1 px-2  text-white'>{property.propertyType}</p>
                            </div>
                            <div className='text-left space-y-3 p-5'>
                                <h2 className='text-xl font-semibold text-stone-700'>BDT {property.price} / month</h2>
                                <h4 className='text-base font-semibold flex items-center gap-2 text-stone-600'><LiaReact className='text-stone-600' />{property.propertySize} sqft</h4>
                                <div className='flex flex-row items-center  gap-3 text-[16px] font-semibold text-stone-400'>
                                    <p className='flex items-center gap-1'><LiaBedSolid  className='text-stone-600' />{property.bedroom} Bed</p>
                                    <p className='flex items-center gap-1'><BiBath className='text-stone-600 ' />{property.bathroom} Bath</p>
                                    <p className='flex items-center gap-1'><MdOutlineBalcony className='text-stone-600' />{property.balcony} Balcony</p>
                                </div>
                                <p className='text-sm font-normal flex items-center gap-1 text-blue-700 '><IoLocationOutline />house11,road4,block-f,banani</p>
                            </div>
                        </div>
                       
                       </>
                    )
                }
            </div>

        </div>
    );
};

export default Feature;