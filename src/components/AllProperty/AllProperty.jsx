"use client"
import Image from 'next/image';
import { GiSelfLove } from "react-icons/gi";
import { FaBed, FaShareAlt } from "react-icons/fa";
import { BiBath } from "react-icons/bi"
import { MdOutlineBalcony } from 'react-icons/md';
import { LiaBedSolid, LiaReact } from "react-icons/lia";
import { IoLocationOutline } from 'react-icons/io5';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterDropdown from '../FilterDropdown/FilterDropdown';

const AllProperty = () => {
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
        <div>
            <div style={{ position: "relative", width: "100%", height: "300px" }}>
                <Image
                    alt="image"
                    src="/images/home.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className='my-10'>
                <div className='mb-5 border p-4'>
                    <FilterDropdown />
                </div>
                <div className='text-left my-5'>
                    <p className='text-sm text-gray-500'>Home , Dhaka , Apartment/Flats for Rent</p>
                    <h4 className='text-base  font-semibold flex items-center gap-1'>Apartment/Flats for Rent</h4>
                    <p className='text-sm text-gray-500'>Showing 1-16 of 113 Rent Residential Properties</p>
                </div>
                <div className='grid grid-cols-1 w-full gap-5'>
                    {
                        features.map((property) =>
                            <>
                                <Link href={'seeDetails'}>
                                    <div className='bg-base-200 w-full flex flex-row gap-4 p-5'>
                                        <div className='w-3/12'>
                                            <Image alt='image' className='w-full' src={'/images/img2.jpg'} width={200} height={200} />
                                        </div>
                                        <div className='flex w-9/12 justify-between'>
                                            <div className='text-left space-y-3 py-5'>
                                                <h2 className='text-xl font-semibold'>BDT {property.price} / month</h2>
                                                <h4 className='text-base font-medium flex items-center gap-1'><LiaReact className='text-gray-600' />{property.propertySize} sqft <span className='text-blue-400'>{property.propertyType} for {property.postType}</span></h4>
                                                <div className='flex flex-row items-center  gap-3 text-xs font-normal text-gray-600'>
                                                    <p className='flex items-center gap-1'><LiaBedSolid />{property.bedroom} Bed</p>
                                                    <p className='flex items-center gap-1'><BiBath />{property.bathroom} Bath</p>
                                                    <p className='flex items-center gap-1'><MdOutlineBalcony />{property.balcony} Balcon</p>
                                                </div>
                                                <p className='text-xs font-normal flex items-center gap-1 text-blue-700'><IoLocationOutline />house11,road4,block-f,banani</p>
                                                <p className='pt-1 text-xs flex items-center gap-1 text-gray-500'><Image alt='logo' height={25} width={45} src={'/images/logo.png'} />RentHomeBd</p>
                                            </div>
                                            <div className='flex flex-row py-5 gap-2'>
                                                <GiSelfLove className='text-blue-400' />
                                                <FaShareAlt className='text-blue-400' />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProperty;