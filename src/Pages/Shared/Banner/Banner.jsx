import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/imgs/banner1.jpeg'
import banner2 from '../../../assets/imgs/banner2.jpeg'
import banner3 from '../../../assets/imgs/banner3.jpeg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div >
            {/* <Carousel showArrows={true} interval={true}  >
                <div>
                    <img className='rounded' src={banner1} />
                    <p>hello</p>
                    <h2>Buy Kids Ride On Cars</h2>
                    <p>Get 25% Off On First Order And Also Get Gift Voucher</p>
                    <button className='btn btn-link'>Shop Now</button>

                </div>
                <div>
                    <img className='rounded' src={banner2} />

                </div>
                <div>
                    <img className='rounded' src={banner3} />

                </div>
            </Carousel> */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item  relative w-full">
                    <img src={banner1} className="w-full rounded-lg" />
                    <div className="absolute rounded-xl flex justify-end text-end items-center h-full w-full right-0 bottom-0 bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0)]">

                        <div className='text-white  space-y-0 lg:space-y-7 pr-12 w-1/2'>
                            <h2 className=' lg:text-6xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600' > <span className=' '>Buy Kids</span> Ride On Cars</h2>
                            <p className='lg:text-xl' >TGet 25% Off On First Order And Also Get Gift Voucher</p>
                            <div>
                                <button className='btn btn-link'>Shop Now <FaArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-start lg:justify-center transform -translate-y-1/2 left-5 right-12 bottom-14 ">

                        <a href="#slide3" className='text-white mr-5' > <FaArrowLeft className='text-2xl' /> </a>
                        <a href="#slide2" className='text-red-600' > <FaArrowRight className='text-2xl' /> </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full rounded-lg" />
                    <div className="absolute rounded-xl flex justify-start text-start items-center h-full w-full right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                        <div className='text-white space-y-0 lg:space-y-7 pl-12 w-1/2'>
                            <h2 className=' lg:text-6xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600' > <span className=' '>Buy Kids</span> Ride On Cars</h2>
                            <p>TGet 25% Off On First Order And Also Get Gift Voucher</p>
                            <div>
                                <button className='btn btn-link'>Shop Now <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end lg:justify-center transform -translate-y-1/2 left-5 right-12 bottom-14">

                        <a href="#slide1" className='text-white mr-5' > <FaArrowLeft className='text-2xl' /> </a>
                        <a href="#slide3" className='text-red-600' > <FaArrowRight className='text-2xl' /> </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full rounded-lg" />
                    <div className="absolute rounded-xl flex justify-end text-end items-center h-full w-full right-0 bottom-0 bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0)]">

                        <div className='text-white space-y-0 lg:space-y-7 pr-12 w-1/2'>
                            <h2 className=' lg:text-6xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600' > <span className=' '>Buy Kids</span> Ride On Cars</h2>
                            <p>TGet 25% Off On First Order And Also Get Gift Voucher</p>
                            <div>
                                <button className='btn btn-link'>Shop Now <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-start lg:justify-center  transform -translate-y-1/2 left-5 right-12 bottom-14">

                        <a href="#slide2" className='text-white mr-5' > <FaArrowLeft className='text-2xl' /> </a>
                        <a href="#slide1" className='text-red-600' > <FaArrowRight className='text-2xl' /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default Banner;