import React from 'react';

const ToysCard = ({toy}) => {

    const {_id,price,title,toy_name,sub_category,seller,available_quantity,user_img} = toy

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={user_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {toy_name}</h2>
                    <p>Category: {sub_category}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {available_quantity}</p>
                    <div className="card-actions w-full">
                        <button className="btn btn-outline btn-primary  w-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;