"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';

const TypeOfProperties = () => {
    return (
        <div className='my-10'>
             <h1 className="text-2xl font-bold mb-6">Type of Properties</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Apartment/Flates
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/apart.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Independent House
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/indhouse.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Duplex Home
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/duplexhome.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Studio Apartment
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/studio.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Sublet/Room
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/sublet.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Office space
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/officespace.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Plot
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/plot.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Guest House
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/guesthouse.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href={'#'}>
                        <div>
                            <div className='relative' style={{ width: 200,height:120 }}>
                                <h3 className="absolute left-12 top-12 text-gray-400">
                                    Showroom/Shop
                                </h3>
                                <Image alt='image' className='w-full h-full bg-black opacity-25' src={'/showroom.jpg'} width={200} height={120} />
                                <div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default TypeOfProperties;