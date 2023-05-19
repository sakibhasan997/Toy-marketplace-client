import React from 'react';
import Marquee from "react-fast-marquee";
import slider1 from '../../../../assets/slider/1.jpg'
import slider2 from '../../../../assets/slider/2.jpg'
import slider3 from '../../../../assets/slider/3.jpg'
import slider4 from '../../../../assets/slider/4.jpg'
import slider5 from '../../../../assets/slider/5.jpg'
import slider6 from '../../../../assets/slider/6.jpg'
import slider7 from '../../../../assets/slider/7.jpg'
import slider8 from '../../../../assets/slider/8.jpg'

const ExtraSection1 = () => {



    return (
        <>
            <Marquee className='slider-img cursor-pointer'>
                <img className='' src={slider1} alt="" />
                <img src={slider2} alt="" />
                <img src={slider3} alt="" />
                <img src={slider4} alt="" />
                <img src={slider5} alt="" />
                <img src={slider6} alt="" />
                <img src={slider7} alt="" />
                <img src={slider8} alt="" />
            </Marquee>
        </>
    )
}

export default ExtraSection1;