import React from 'react';
import Layout from '../Layout';
import { IoMdHome } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import Link from 'next/link';
const Dashboard = () => {
    return (
        <Layout>
            <div>
                <h1 className='font-extrabold text-2xl bg-gray-200 border text-stone-700 p-8'> Dashboard</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-8'>
                    <div className='bg-white p-8'>
                        <div className='flex justify-between items-center'>
                            <div className='bg-green-50 p-2 rounded-lg'>
                                <IoMdHome className=' text-green-400 text-2xl' />
                            </div>
                            <h3>All Properties</h3>
                        </div>
                        <p className='font-extrabold text-2xl py-4'>0</p>
                        <div className='text-end'>
                            <Link className='flex items-center' href={'#'}><span className='text-green-600 hover:text-green-300'>Go to List </span><span className='text-green-500'><AiOutlineRight /></span></Link>
                        </div>
                    </div>

                    <div className='bg-white p-8'>
                        <div className='flex justify-between  items-center'>
                            <div className='bg-green-50 p-2 rounded-lg'>
                                <LuLoader className=' text-green-400 text-2xl' />
                            </div>
                            <h3>Pending Properties</h3>
                        </div>
                        <p className='font-extrabold text-2xl py-4'>0</p>
                        <div className='text-end'>
                            <Link href={'#'} className='text-green-600 hover:text-green-300'>Go to List</Link>
                        </div>
                    </div>

                    <div className='bg-white p-8'>
                        <div className='flex justify-between items-center'>
                            <div className='bg-green-50 p-2 rounded-lg'>
                                <IoCloudDownloadOutline className=' text-green-400 text-2xl' />
                            </div>
                            <h3>Total Enquiries</h3>
                        </div>
                        <p className='font-extrabold text-2xl py-4'>0</p>
                        <div className='text-end'>
                            <Link href={'#'} className='text-green-600 hover:text-green-300'>Go to List</Link>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;