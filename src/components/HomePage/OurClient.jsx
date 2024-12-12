import Image from 'next/image';
import React from 'react';

const OurClient = () => {
    return (
        <div className='my-10'>
            <div className='text-center my-5'>
                <h3 className='text-2xl font-bold'>Our Valuable Clients</h3>
                <p>Enjoyed our pleasant service</p>
            </div>
            <div className='flex flex-row justify-between'>
                <div>
                    <Image alt='image' src={'/images/c1.png'} width={100} height={100} />
                </div>
                <div>
                    <Image alt='image' src={'/images/c2.png'} width={100} height={100} />
                </div>
                <div>
                    <Image alt='image' src={'/images/c3.webp'} width={100} height={100} />
                </div>
                <div>
                    <Image alt='image' src={'/images/c4.png'} width={100} height={100} />
                </div>
                <div>
                    <Image alt='image' src={'/images/c5.png'} width={100} height={100} />
                </div>
            </div>

            <div>
                <div className='relative w-full h-60 mt-10 '>
                    <div
                        className="hero h-60"
                        style={{
                            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <div>
                                    <h1 className="mb-5 text-2xl font-bold">Contact us to secure your property!</h1>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                                <div className='absolute  right-24 border-2 border-left border-t-0 border-r-0 border-b-0 pl-4'>
                                    <h4>Call Now</h4>
                                    <p>+88 01622888666</p>
                                    <p>+88 01622888666</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClient;