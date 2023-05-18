import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div>
                <div className="hero my-10">
                    <div className="  ">
                        <div className="text-center my-8 ">
                            <h1 className="text-5xl font-bold">Please Login Now!</h1>

                        </div>
                        <Form >
                            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-10">
                                <div className="card-body">
                                    <p className='text-red-600'></p>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Your Email Address</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Your Email.." className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Password Address</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Your Password..." className="input input-bordered" required />
                                    </div>
                                    {/* <div className="form-control mt-6"> */}
                                    <button className="btn btn-primary mt-6" type="submit">Login</button>
                                    {/* </div> */}
                                    <div className="divider">OR</div>
                                    <div className='my-5 mx-auto'>
                                        <button  className='btn mb-2 btn-outline btn-primary flex gap-2 items-center'><FaGoogle className='' /> Google SignIn</button>
                                        
                                    </div>
                                    
                                    <p className='mt-5'>Don't Have an Account? <Link className='link-hover btn-link' to='/register'>Register</Link> </p>
                                </div>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;