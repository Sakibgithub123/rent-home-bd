import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceDetails = () => {
    return (
        <div className='my-10'>
            <div className='grid grid-cols- md:grid-cols-3'>
                <div className='flex flex-col items-center justify-center bg-white border hover:shadow-lg p-5'>
                    <div>
                        <Image alt='image' src={'/images/rent.png'} height={50} width={50} />
                    </div>
                    <div className='text-center space-y-4 my-5'>
                        <h3 className='text-xl font-bold text-blue-500'>Rent Property</h3>
                        <p className='text-sm'>Discover your ideal living space - explore a variety of
                            rental properties and find the perfect home for your next chapter!</p>
                        <div className='py-5'>
                            <Link href={'allProperty'} className='px-3 py-3 bg-blue-400 rounded text-white hover:bg-blue-300'>See Details</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-white border hover:shadow-lg p-5'>
                    <div>
                        <Image alt='image' src={'/images/buy.png'} height={50} width={50} />
                    </div>
                    <div className='text-center space-y-4 my-5'>
                        <h3 className='text-xl font-bold text-blue-500'>Buy a Property</h3>
                        <p className='text-sm'>Seize the opportunity to own your dream property - invest
                             in your future today!</p>
                        <div className='py-5'>
                            <Link href={'allProperty'} className='px-3 py-3 bg-blue-400 rounded text-white hover:bg-blue-300 '>See Details</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-white border hover:shadow-lg p-5'>
                    <div>
                        <Image alt='image' src={'/images/sale.png'} height={50} width={50} />
                    </div>
                    <div className='text-center space-y-4 my-5'>
                        <h3 className='text-xl font-bold text-blue-500'>Sell a Property</h3>
                        <p className='text-sm'>Explore exclusive properties for sale and seize the 
                            opportunity to own your dream home.</p>
                        <div className='py-5'>
                            <Link href={'allProperty'} className='px-3 py-3 bg-blue-400 rounded text-white hover:bg-blue-300 '>See Details</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;