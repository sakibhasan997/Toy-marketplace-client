import React from 'react';
import ExtraSection1 from './extraSction/ExtraSection1';
import ToyTabs from '../ToyTabs/ToyTabs';
import ExtraSection2 from './extraSction/ExtraSection2';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';
import useTitle from '../../../Hooks/UseTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div className='my-16'>
                <PhotoGallery />
            </div>
            <ToyTabs />
            <div className='my-16'>
                <ExtraSection2 />
            </div>
            <div>
                <ExtraSection1 />
            </div>
        </div>
    );
};

export default Home;