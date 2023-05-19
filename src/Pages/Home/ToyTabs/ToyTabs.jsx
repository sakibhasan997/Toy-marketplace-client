import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';


const ToyTabs = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('/public/ToysTab.json')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])


    return (
        <div>
            <div className='text-center py-8'>
                <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>OUR CATEGORY PRODUCT</h1>
                <p className='pt-3'>Let your kids relish their play time to the fullest,  buy battery cars for  children at Paytm Mall <br /> and catch their priceless smile!</p>
            </div>
            <Tabs forceRenderTabPanel defaultIndex={1} >
                <TabList>
                    <Tab>SPORTS CAR</Tab>
                    <Tab>TRUCK</Tab>
                    <Tab>REGULAR CAR</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            toys[0]?.cars?.map((toy) => (
                                <div key={toy.id}>
                                    <div className="hero min-h-full py-5 lg:py-24 ">
                                        <div className="hero-content flex-col lg:flex-row">
                                            <img src={toy?.user_img} className="max-w-sm rounded-lg shadow-2xl" />
                                            <div className='mx-5 space-y-5'>
                                                <h1 className="text-5xl font-bold">{toy?.name}</h1>
                                                <p className="py-6">Price: ${toy?.price}</p>
                                                <div>
                                                    <Rating
                                                        placeholderRating={toy?.rating}
                                                        emptySymbol={<FaRegStar />}
                                                        placeholderSymbol={<FaStar className='text-warning' />}
                                                        fullSymbol={<FaStar className='text-warning' />}
                                                    />
                                                    <span>{toy?.rating}</span>
                                                </div>
                                                <button className="btn btn-outline btn-primary">View Details</button>

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
                                    <div className="hero min-h-full py-5 lg:py-24 ">
                                        <div className="hero-content flex-col lg:flex-row">
                                            <img src={toy?.user_img} className="max-w-sm rounded-lg shadow-2xl" />
                                            <div className='mx-5 space-y-5'>
                                                <h1 className="text-5xl font-bold">{toy?.name}</h1>
                                                <p className="py-6">Price: ${toy?.price}</p>
                                                <div>
                                                    <Rating
                                                        placeholderRating={toy?.rating}
                                                        emptySymbol={<FaRegStar />}
                                                        placeholderSymbol={<FaStar className='text-warning' />}
                                                        fullSymbol={<FaStar className='text-warning' />}
                                                    />
                                                    <span>{toy?.rating}</span>
                                                </div>
                                                <button className="btn btn-outline btn-primary">View Details</button>

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
                                    <div className="hero min-h-full py-5 lg:py-24 ">
                                        <div className="hero-content flex-col lg:flex-row">
                                            <img src={toy?.user_img} className="max-w-sm rounded-lg shadow-2xl" />
                                            <div className='mx-5 space-y-5'>
                                                <h1 className="text-5xl font-bold">{toy?.name}</h1>
                                                <p className="py-6">Price: ${toy?.price}</p>
                                                <div>
                                                    <Rating
                                                        placeholderRating={toy?.rating}
                                                        emptySymbol={<FaRegStar />}
                                                        placeholderSymbol={<FaStar className='text-warning' />}
                                                        fullSymbol={<FaStar className='text-warning' />}
                                                    />
                                                    <span>{toy?.rating}</span>
                                                </div>
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