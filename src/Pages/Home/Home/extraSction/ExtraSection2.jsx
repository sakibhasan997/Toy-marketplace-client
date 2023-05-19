import React from 'react';
import section from '../../../../assets/section/section-img.jpeg'
import { FaArrowRight } from 'react-icons/fa';

const ExtraSection2 = () => {
    return (
        <div className='w-full h-80  '>
            <div className='section-img'>
            <div className='text-end pt-20 pr-16'>
                <h2 className='font-extrabold text-3xl lg:text-6xl text-gray-600'>NEW ARRIVAL</h2>
                <p className='pt-5 text-gray-700'>Get Up To 50% Off *Only</p>
                <button className='btn btn-link'>SHOP NOW <FaArrowRight /></button>
            </div>
            </div>
        </div>
    );
};

export default ExtraSection2;