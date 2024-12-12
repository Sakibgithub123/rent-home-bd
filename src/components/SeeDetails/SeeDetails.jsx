import Image from 'next/image';
import { GiSelfLove } from "react-icons/gi";
import { FaBed, FaCheck, FaRegBuilding, FaShareAlt } from "react-icons/fa";
import { BiBath } from "react-icons/bi"
import { MdOutlineBalcony } from 'react-icons/md';
import { LiaReact } from "react-icons/lia";
import { IoLocationOutline } from 'react-icons/io5';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/ai';
const SeeDetails = () => {
    return (
        <div className='my-10'>
            <div className='flex gap-5'>
                <div className='w-8/12'>
                    <div>
                        <div className='flex gap-1'>
                            <div className='w-2/3'>
                                <Image width={600} height={450} src={''} />
                            </div>
                            <div className='grid grid-cols-2 gap-1 w-1/2'>
                                <Image width={200} height={200} src={''} />
                                <Image width={200} height={200} src={''} />
                                <Image width={200} height={200} src={''} />
                                <Image width={200} height={200} src={''} />
                            </div>
                        </div>
                        <h4 className='text-xl py-5 font-medium flex items-center gap-1'><LiaReact className='text-gray-600' />1800 sqft <span className='text-gray-600'>Apartment Rent @ Dhanmondi</span></h4>
                        <div className='space-y-5'>
                            <div className='bg-gray-100 p-8'>
                                <h3 className='text-xl font-semibold pb-5'>Property Overview</h3>
                                <div className='grid grid-cols-4 gap-4'>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Size</p>
                                        <h3 className='text-base font-semibold'>1575 sqft</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Property Condition</p>
                                        <h3 className='text-base font-semibold'>Resale</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Floor</p>
                                        <h3 className='text-base font-semibold'>Second floor /7</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Furnished Status</p>
                                        <h3 className='text-base font-semibold'>Unfurnished</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Car Parking</p>
                                        <h3 className='text-base font-semibold'>1</h3>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-semibold pb-5'>Description</h3>
                                    <p>If you are looking for a home that will make your everyday
                                        life easy then check this lovely apartment. The position of the
                                        house makes sure you get everyday necessity within your reach.
                                        The apartment is 1575 Square Feet with 3 beds,
                                        3 baths, drawing, dining, balcony and a kitchen</p>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-8'>
                                <h3 className='text-xl font-semibold pb-5'>Terms & Conditions</h3>
                                <div className='grid grid-cols-4 gap-4'>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Advance Deposit</p>
                                        <h3 className='text-base font-semibold'>90000</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Service Charge</p>
                                        <h3 className='text-base font-semibold'>7000</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Available from</p>
                                        <h3 className='text-base font-semibold'>2024-12-01</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Available for</p>
                                        <h3 className='text-base font-semibold'>Any</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Property Condition</p>
                                        <h3 className='text-base font-semibold'>Resale</h3>
                                    </div>
                                    <div className='text-justify'>
                                        <p className='text-sm'>Negotiable</p>
                                        <h3 className='text-base font-semibold'>Yes</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-8'>
                                <h3 className='text-xl font-semibold pb-5'>Features / Amenities</h3>
                                <div>
                                    <p className='flex items-center gap-2'><span className='bg-blue-100 p-2 rounded-full'><FaCheck className='text-blue-500 font-extrabold text-xs' /></span><span>Intercom</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-4/12'>
                    <div className="bg-blue-800 p-10">
                        <div className='text-left space-y-3 py-5'>
                            <p className='text-white'><span>FOR RENT</span> <span>Posted: 1 day ago</span></p>
                            <h2 className='text-xl font-semibold'>BDT 45000 / month</h2>
                            <h4 className='text-sm text-white font-medium flex items-center gap-1'><LiaReact className='text-blue-100' />1800 sqft <span className='text-blue-100'>Apartment/Flats for Rent</span></h4>
                            <div className='grid grid-cols-3 gap-1 text-xs font-normal bg-blue-100 p-4 text-gray-600'>
                                <p className='flex items-center gap-1'><FaBed />3bed</p>
                                <p className='flex items-center gap-1'><BiBath />2bath</p>
                                <p className='flex items-center gap-1'><FaCheck />Parking</p>
                                <p className='flex items-center gap-1'><MdOutlineBalcony />2balcony</p>
                                <p className='flex items-center gap-1'><FaRegBuilding />Second floor</p>
                                <p className='flex items-center gap-1'><FaCheck />Unfurnished</p>
                            </div>
                            <p className='text-xs font-normal flex items-center gap-1 text-blue-100'><IoLocationOutline />house11,road4,block-f,banani</p>
                            <p className='pt-3 text-center'>This property is for Residential use.</p>
                            <p className='text-blue-100'>--------------------------------------------------------------</p>
                            <div className=' flex gap-5 justify-center'>
                                <Link className='bg-blue-100 text-white px-8 py-2' href={""}>Mail Us</Link>
                                <Link className='bg-blue-100 text-white px-8 py-2' href={""}>Call Now</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <h3 className='text-xl font-semibold py-5'>Similar rent properties around Dhanmondi</h3>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <Link href={""}>
                    <div className='bg-base-200 w-56'>
                        <div className='relative'>
                            <Image alt='image' className='w-full' src={'/images/img2.jpg'} width={200} height={200} />
                            <p className='absolute top-4 bg-blue-400 py-1 px-2 left-2 text-white text-sm'>For Rent</p>
                            <p className='absolute top-28 bg-stone-400 py-1 px-2 left-12 text-white'>Apartment/Flats</p>
                        </div>
                        <div className='text-left space-y-3 p-5'>
                            <h2 className='text-xl font-semibold text-stone-700'>BDT 4000 / month</h2>
                            <h4 className='text-sm font-semibold flex items-center gap-2 text-stone-400'><LiaReact className='text-stone-600' />1800 sqft</h4>
                            <div className='flex flex-row items-center  gap-1 text-xs font-normal text-stone-950'>
                                <p className='flex items-center gap-2'><FaBed className='text-blue-400' />3 bed</p>
                                <p className='flex items-center gap-2'><BiBath className='text-blue-400' />2 bath</p>
                                <p className='flex items-center gap-2'><MdOutlineBalcony className='text-blue-400' />2 balcony</p>
                            </div>
                            <p className='text-xs font-normal flex items-center gap-1 text-blue-700 '><IoLocationOutline />house11,road4,block-f,banani</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default SeeDetails;