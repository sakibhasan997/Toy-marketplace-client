import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';

const Details = () => {
    useTitle('Details')
    const [disable, setDisable] = useState(false);
    const handleFavorite = () => {
        toast('Item Added Successfully')
        setDisable(true)
    }

    const toyDetails = useLoaderData();
    const { _id, price, title, toy_name, rating, sub_category, description, seller_Name, available_quantity, user_img, postedBy } = toyDetails || {};
    console.log(toyDetails);
    return (
        <div>

            <div className="hero my-20">
                <div className="hero-content flex-col gap-24 lg:flex-row">
                    <div className='h-full w-full'>
                    <img src={user_img} className="w-full h-full rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl text-gray-800 font-semibold">{toy_name}</h1>
                        <p className="py-6 text-2xl text-gray-700">{description}</p>
                        <p className="p-2 text-xl text-gray-600">Seller: {seller_Name}</p>
                        <p className="p-2 text-xl text-gray-600">Email: {postedBy}</p>
                        <p className="p-2 text-xl text-gray-600">Price: ${price}</p>
                        <p className="p-2 text-xl text-gray-600">Quantity: ${available_quantity}</p>

                        <div className='flex items-center mt-5 gap-3 '>
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar className='text-warning' />}
                            />
                            <span>{rating}</span>
                            <button onClick={handleFavorite} disabled={disable} className="btn btn-primary ml-20">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;