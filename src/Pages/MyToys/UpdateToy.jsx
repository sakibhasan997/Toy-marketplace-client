import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/UseTitle';
import { useForm } from 'react-hook-form';


const UpdateToy = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    useTitle('Updated')
    const data = useLoaderData();
    console.log(data);
    const { _id, price, title, toy_name, sub_category, seller_Name, available_quantity, user_img, postedBy } = data

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const updatedValue = data => {

        fetch(`https://assignment-11-server-site-eight.vercel.app/updated/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toys Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    },
                    navigate('/myToys')
                    )
                    // data.reset();
                }
            });
    };


    return (
        <div className=' my-40 mx-auto'>
            <div className='toy-title text-center my-5'>
                <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>UPDATED YOUR TOYS</h1>
            </div>
            <div className='toy-form mx-auto text-center'>
                <form onSubmit={handleSubmit(updatedValue)}>
                    <input
                        className="text-input"
                        {...register("seller_Name", { required: true })}
                        placeholder="Your Name"
                        defaultValue={user?.displayName}
                        name=''
                    />
                    <input
                        className="text-input"
                        value={user?.email}
                        {...register("postedBy", { required: true })}
                        placeholder="your email"
                        type="email"

                    />
                    <input
                        className="text-input"
                        {...register("price", { required: true })}
                        placeholder="Price"
                        // defaultValue="30k"
                        defaultValue={price}
                    />
                    <input
                        className="text-input"
                        {...register("available_quantity", { required: true })}
                        placeholder="Quantity"
                        type="number"
                        defaultValue={available_quantity}
                    />
                    <br />
                    <select defaultValue={sub_category} className="text-input" {...register("sub_category",  { required: true })}>
                        <option value="sports_cars">sports car</option>
                        <option value="truck">truck</option>
                        <option value="Regular_cars">Regular cars</option>
                    </select>
                    <input
                        className="text-input"
                        {...register("user_img", { required: true })}
                        placeholder="Update image link"
                        type="url"
                        defaultValue={user_img}
                    />
                    <input
                        className="text-input"
                        {...register("description", { required: true })}
                        placeholder="Update Description"
                    />
                    <br />
                    <input className="btn submit-btn" value="Post Toy" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;