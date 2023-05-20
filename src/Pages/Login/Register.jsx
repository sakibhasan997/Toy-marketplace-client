import React, { useContext, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../Hooks/UseTitle';

const Register = () => {
    const { createRegister } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    // const navigate = useNavigate()
    useTitle('Register')


    const handleRegister = (e) => {

        e.preventDefault();
        setSuccess('');
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase ');
            return;
        }

        createRegister(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {displayName: name, photoURL: photo})
                console.log(user);
                form.reset();
                setError('')
                toast('Your Auth is successful');
                setSuccess('Your Auth is successful')
                // navigate(form, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

        // update profile
        

    }

    return (
        <div>
            <div className="hero mb-16">
                <div className="  ">
                    <div className="text-center my-8 ">
                        <h1 className="text-5xl font-bold">Please Register Now!</h1>

                    </div>
                    <Form onSubmit={handleRegister}>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-10">
                            <div className="card-body">
                                <p className='text-red-600'>{error}</p>
                                <p className='text-success'>{success}</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name.." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email.." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your Password..." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL.." className="input input-bordered" required />
                                </div>
                                {/* <div className="form-control mt-6"> */}
                                <button className="btn btn-primary mt-6" type="submit">Register</button>
                                {/* </div> */}
                                <p className='mt-5'>Already Have an Account? <Link className='link-hover btn-link' to='/login'>Login</Link> </p>
                            </div>
                        </div>
                    </Form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;