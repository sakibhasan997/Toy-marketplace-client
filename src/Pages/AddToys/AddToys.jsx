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

    fetch("http://localhost:5000/postToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          console.log(data);
          Swal.fire({
              title: 'Success!',
              text: 'Coffee Added Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            data.reset();
      }
      });
  };

  return (
    <div className=' my-40 mx-auto'>
      <div className='toy-title text-center my-5'>
        <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>POST YOUR TOYS</h1>
      </div>
      <div className='toy-form'>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
                
                <input className='input-filed w-1/2' defaultValue="test" {...register("example")} />
                <input className='input-filed w-1/2' defaultValue="test" {...register("example")} />
                <input className='input-filed w-1/3'  {...register("exampleRequired", { required: true })} />
                <input className='input-filed w-1/3'  {...register("exampleRequired", { required: true })} />
                <input className='input-filed w-1/3'  {...register("exampleRequired", { required: true })} />
                <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
                <input className='input-filed w-1/2'  {...register("exampleRequired", { required: true })} />
                <input className='input-filed w-1/2'  {...register("exampleRequired", { required: true })} />
                <input className='input-filed w-full'  {...register("exampleRequired", { required: true })} />
             
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" className='toy-submit' />
            </form> */}
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
            <option value="sports_cars">sports car</option>
            <option value="truck">truck</option>
            <option value="Regular_cars">Regular cars</option>
          </select>
          <select className="text-input" {...register("toy_name", { required: true })}>
              <option value="muscle_Car">Muscle Car</option>
              <option value="speed_Racer">Speed Racer</option>
              <option value="Off_Road_Adventure">Off-Road Adventure</option>
              <option value="Off_City_Cruiser">City Cruiser</option>
              <option value="Monster_Truck_Madness">Monster Truck Madness</option>
              <option value="Sports_Car_Simulator">Sports Car Simulator</option>
              <option value="Police_Pursuit">Police Pursuit</option>
              <option value="Demolition_Derby">Demolition Derby</option>
            </select>
          <input
            className="text-input"
            {...register("user_img", { required: true })}
            placeholder="image link"
            type="url"
          />
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
          {/* <CreatableSelect
              className="w-75"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            /> */}
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