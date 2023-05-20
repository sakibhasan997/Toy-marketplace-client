import React from 'react';
import { Link } from 'react-router-dom';

const MyToysCard = ({ toy, handleDelete }) => {
    const { _id, price, title, toy_name, sub_category, seller_Name, available_quantity, user_img, postedBy } = toy
    console.log(toy);



    return (

        <tr>

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
            <td>{postedBy}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_quantity}</td>
            <th>
                <Link to={`/updateToys/${_id}`}>
                    <button className="btn btn-outline btn-primary btn-sm">Update</button>
                </Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error btn-sm">Delete</button>
            </th>
        </tr>

    );
};

export default MyToysCard;