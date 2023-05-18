import React from 'react';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero mb-16">
                <div className="  ">
                    <div className="text-center my-8 ">
                        <h1 className="text-5xl font-bold">Please Register Now!</h1>

                    </div>
                    <Form>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-10">
                            <div className="card-body">
                                <p className='text-red-600'></p>
                                <p className='text-success'></p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name.." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL.." className="input input-bordered" required />
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
                                {/* <div className="form-control mt-6"> */}
                                <button className="btn btn-primary mt-6" type="submit">Register</button>
                                {/* </div> */}
                                <p className='mt-5'>Already Have an Account? <Link className='link-hover btn-link' to='/login'>Login</Link> </p>
                            </div>
                        </div>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default Register;