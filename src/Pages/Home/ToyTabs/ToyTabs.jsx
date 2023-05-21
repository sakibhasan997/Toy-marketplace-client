import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'


const ToyTabs = () => {

    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch('https://assignment-11-server-site-eight.vercel.app/tabToys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])
    console.log(toys);

    Aos.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    return (
        <div>
            <div className='text-center py-8'>
                <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>OUR CATEGORY PRODUCT</h1>
                <div className="divider w-1/3 mx-auto my-0">OR</div>
                <p className='pt-3'>Let your kids relish their play time to the fullest,  buy battery cars for  children at Paytm Mall <br /> and catch their priceless smile!</p>
            </div>
            <Tabs forceRenderTabPanel defaultIndex={1} >
                <TabList>
                    <Tab>SPORTS CAR</Tab>
                    <Tab>REGULAR CAR</Tab>
                    <Tab>TRUCK</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            toys[0]?.cars?.map((toy) => (
                                <div key={toy.id}>
                                    <div className="hero min-h-full py-5 lg:py-20 ">
                                        <div className="hero-content flex-col lg:flex-row">
                                            <div data-aos="zoom-in-up">
                                                <img src={toy?.user_img} className="max-w-sm rounded-lg shadow-2xl" />
                                            </div>
                                            <div data-aos="fade-left"
                                                data-aos-anchor="#example-anchor"
                                                data-aos-offset="500"
                                                data-aos-duration="500" className='mx-5 space-y-5'>
                                                <h1 className="text-5xl font-bold">{toy?.name}</h1>
                                                <p className="py-6">Price: ${toy?.price}</p>
                                                <div className='flex gap-3'>
                                                    <Rating
                                                        placeholderRating={toy?.rating}
                                                        emptySymbol={<FaRegStar />}
                                                        placeholderSymbol={<FaStar className='text-warning' />}
                                                        fullSymbol={<FaStar className='text-warning' />}
                                                    />
                                                    <span>{toy?.rating}</span>
                                                </div>
                                                <br />
                                                {/* <Link to={`/toyDetails/${toy?.id}`}> */}
                                                <button className="btn btn-outline btn-primary">View Details</button>
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            toys[2]?.cars?.map((toy) => (
                                <div key={toy.id}>
                                    <div className="hero min-h-full py-5 lg:py-20 ">
                                        <div className="hero-content flex-col lg:flex-row">
                                            <div data-aos="zoom-in-up">
                                                <img src={toy?.user_img} className="max-w-sm rounded-lg shadow-2xl" />
                                            </div>
                                            <div data-aos="fade-left"
                                                data-aos-anchor="#example-anchor"
                                                data-aos-offset="500"
                                                data-aos-duration="500" className='mx-5 space-y-5'>
                                                <h1 className="text-5xl font-bold">{toy?.name}</h1>
                                                <p className="py-6">Price: ${toy?.price}</p>
                                                <div className='flex gap-3'>
                                                    <Rating
                                                        placeholderRating={toy?.rating}
                                                        emptySymbol={<FaRegStar />}
                                                        placeholderSymbol={<FaStar className='text-warning' />}
                                                        fullSymbol={<FaStar className='text-warning' />}
                                                    />
                                                    <span>{toy?.rating}</span>
                                                </div>
                                                <br />
                                                {/* <Link to={`/toyDetails/${toy.id}`}> */}
                                                <button className="btn btn-outline btn-primary">View Details</button>
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            toys[1]?.cars?.map((toy) => (
                                <div key={toy.id}>
                                    <div className="hero min-h-full py-5 lg:py-20 ">
                                        <div className="hero-content flex-col lg:flex-row">
                                            <div data-aos="zoom-in-up">
                                                <img src={toy?.user_img} className="max-w-sm rounded-lg shadow-2xl" />
                                            </div>
                                            <div data-aos="fade-left"
                                                data-aos-anchor="#example-anchor"
                                                data-aos-offset="500"
                                                data-aos-duration="500" className='mx-5 space-y-5'>
                                                <h1 className="text-5xl font-bold">{toy?.name}</h1>
                                                <p className="py-6">Price: ${toy?.price}</p>
                                                <div className='flex gap-3'>
                                                    <Rating
                                                        placeholderRating={toy?.rating}
                                                        emptySymbol={<FaRegStar />}
                                                        placeholderSymbol={<FaStar className='text-warning' />}
                                                        fullSymbol={<FaStar className='text-warning' />}
                                                    />
                                                    <span>{toy?.rating}</span>
                                                </div>
                                                <br />

                                                <button className="btn btn-outline btn-primary">View Details</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ToyTabs;