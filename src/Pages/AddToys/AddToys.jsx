import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './AddToys.css'
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../Hooks/UseTitle';
import Swal from 'sweetalert2';

const AddToys = () => {
  const { user } = useContext(AuthContext)
  useTitle('AddToys')

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {

    fetch("https://assignment-11-server-site-eight.vercel.app/postToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          Swal.fire({
            title: 'Success!',
            text: 'Toys Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          // data.reset();
        }
      });
  };

  return (
    <div className=' my-40 mx-auto '>
      <div className='toy-title text-center my-5'>
        <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>POST YOUR TOYS</h1>
      </div>
      <div className='toy-form text-center'>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
          <input
            className="text-input"
            {...register("seller_Name", { required: true })}
            placeholder="Your Name"
            defaultValue={user?.displayName}

          />

          <input
            className="text-input"
            {...register("price", { required: true })}
            placeholder="Price"
          // defaultValue="30k"
          />
          <input
            className="text-input"
            {...register("available_quantity", { required: true })}
            placeholder="Quantity"
            type="number"
          />
          <select className="text-input" {...register("sub_category", { required: true })}>
            <option value="sports cars">sports car</option>
            <option value="truck">truck</option>
            <option value="Regular cars">Regular cars</option>
          </select>
          <select className="text-input" {...register("toy_name", { required: true })}>
            <option value="muscle Car">Muscle Car</option>
            <option value="speed Racer">Speed Racer</option>
            <option value="Off Road Adventure">Off-Road Adventure</option>
            <option value="Off City Cruiser">City Cruiser</option>
            <option value="Monster Truck Madness">Monster Truck Madness</option>
            <option value="Sports Car Simulator">Sports Car Simulator</option>
            <option value="Police Pursuit">Police Pursuit</option>
            <option value="Demolition Derby">Demolition Derby</option>
          </select>
          <input
            className="text-input"
            {...register("user img", { required: true })}
            placeholder="image link"
            type="url"
          />
          <br />
          <input
            className="text-input"
            {...register("rating", { required: true })}
            placeholder="Rating"

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
            {...register("description", { required: true })}
            placeholder="description"
          />
          <input className="btn submit-btn" value="Post Toy" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddToys;