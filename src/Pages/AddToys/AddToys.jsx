import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './AddToys.css'
import { AuthContext } from '../../Providers/AuthProviders';

const AddToys = () => {
    const {user} = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='toy-container my-52 mx-auto'>
            <div className='toy-title'>
                <h2>Post Your Toys</h2>
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
              {...register("title")}
              placeholder="title"
              defaultValue="Web developer"
            />

            <input
              className="text-input"
              {...register("salary", { required: true })}
              placeholder="salary"
              defaultValue="30k"
            />
            <input
              className="text-input"
              {...register("vacancy", { required: true })}
              placeholder="vacancy"
              type="number"
            />
            <select className="text-input" {...register("category")}>
              <option value="Engineering">engineering</option>
              <option value="Editor">Editor</option>
              <option value="writer">Writer</option>
              <option value="Developer">Developer</option>
            </select>
            <select className="text-input" {...register("status")}>
              <option value="remote">Remote</option>
              <option value="offline">Offline</option>
            </select>
            <input
              className="text-input"
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <input
              className="text-input"
              {...register("deadline")}
              placeholder="deadline"
              type="date"
            />
            <input
              className="text-input"
              value={user?.email}
              {...register("postedBy")}
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
              {...register("description")}
              placeholder="description"
            />
            <input className="submit-btn" value="Post Job" type="submit" />
          </form>
            </div>
        </div>
    );
};

export default AddToys;