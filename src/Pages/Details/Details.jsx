import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toyDetails = useLoaderData();
    console.log(toyDetails);
    return (
        <div>
            <h2>This is private Routes {toyDetails.length}</h2>
        </div>
    );
};

export default Details;