import React, { useEffect, useState } from 'react';
import ToysCard from './ToysCard';
import useTitle from '../../Hooks/UseTitle';

const AllToys = () => {

    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle('AllToys')

    useEffect(() => {
        fetch('https://assignment-11-server-site-eight.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    const handleSearch = () => {
        fetch(`https://assignment-11-server-site-eight.vercel.app/toySearchByTitle/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };

    return (
        <div className='my-5'>
            <h1 className='text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>OUR ALL POST TOYS</h1>
            <div className="flex justify-center mt-5 mb-8 p-2 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-2 input  border-blue-700"
                    placeholder="Search Toy Name"
                />{" "}
                <button onClick={handleSearch} className='btn btn-primary'>Search</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map((toy, index) => (
                                <ToysCard
                                    key={toy?._id}
                                    toy={toy}
                                    index={index}
                                />
                            ))
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllToys;