import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({ toy,index }) => {

    const { _id, price, title, toy_name, sub_category, seller_Name, available_quantity, user_img } = toy
    console.log(toy);
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>

                <div className="avatar">
                    <div className="mask rounded w-20 h-20">
                        <img src={user_img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {seller_Name}
            </td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <th>
                <Link to={`/toyDetails/${_id}`}>
                    <button className="btn btn-outline btn-primary ">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default ToysCard;