import React from 'react';
import { Link } from 'react-router-dom';
import kids from '../../assets/icons/Kids-error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    {/* <FaceFrownIcon className='w-40 h-40 text-yellow-500' /> */}
                    <div className='max-w-xl text-center'>
                       <img className='w-full' src={kids} alt="" />
                       <br />
                       <br />
                        <Link to='/' className='btn btn-primary'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;