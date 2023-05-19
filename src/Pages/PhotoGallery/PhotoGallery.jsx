import React from 'react';
import './gallery.css'
import img1 from '../../assets/car/car1.jpeg'
import img2 from '../../assets/car/car2.jpeg'
import img3 from '../../assets/car/car3.jpeg'
import img4 from '../../assets/car/car4.jpeg'
import img5 from '../../assets/car/car5.jpeg'
import img6 from '../../assets/car/car6.jpeg'
import img7 from '../../assets/car/car7.jpeg'
import img8 from '../../assets/car/car8.jpeg'
import img9 from '../../assets/car/car9.jpeg'
import img10 from '../../assets/car/car10.jpeg'
import img11 from '../../assets/car/car11.jpeg'
import img12 from '../../assets/car/car12.jpeg'
import img13 from '../../assets/car/car13.jpeg'
import img14 from '../../assets/car/car14.jpeg'
import img15 from '../../assets/car/car15.jpeg'
import img16 from '../../assets/car/car16.jpeg'
import useTitle from '../../Hooks/UseTitle';

const PhotoGallery = () => {
    useTitle('Home')
    return (
        <div className=' '>
            <div className='text-center py-8'>
                <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>OUR PHOTO GALLERY</h1>
                <div className="divider w-1/3 mx-auto my-0">OR</div>
                <p className='pt-3'>Let your kids relish their play time to the fullest,  buy battery cars for  children at Paytm Mall <br /> and catch their priceless smile!</p>
            </div>
            <div  className='grid grid-cols-2 lg:grid-cols-6 gap-4 mx-10 lg:mx-14 items-center gallery-img'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img13} alt="" />
                <img src={img12} alt="" />
                <img src={img1} alt="" />
                <img src={img12} alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img2} alt="" />
                <img src={img6} alt="" />
                <img src={img5} alt="" />
            </div>
        </div>
    );
};

export default PhotoGallery;