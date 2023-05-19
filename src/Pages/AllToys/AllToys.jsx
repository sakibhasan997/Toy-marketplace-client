import React, { useEffect, useState } from 'react';
import ToysCard from './ToysCard';

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-11-server-site-eight.vercel.app/toys')
        .then(res => res.json())
        .then(data =>{
            setToys(data);
        })
    },[])

    return (
        <div>
            <h2>All TOys: {toys.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  my-12'>
                {
                    toys.map(toy => (
                        <ToysCard
                        key={toy?._id}
                        toy={toy}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AllToys;