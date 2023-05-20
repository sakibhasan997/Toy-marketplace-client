import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/UseTitle';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    useTitle('MyToys')

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const url = `https://assignment-11-server-site-eight.vercel.app/toys?email=${user?.email}`;
    // const url = `http://localhost:5000/toys?email=${user?.postedBy}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])


    return (
        <div>



            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                   
                   <thead>
                       <tr>
                           <th>
                               No
                           </th>
                           <th>Image</th>
                           <th>Seller</th>
                           <th>User Email</th>
                           <th>Sub-category</th>
                           <th>Price</th>
                           <th>Price</th>
                           <th>Price</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           toys.map((toy) => (
                               <MyToysCard
                                   key={toy?._id}
                                   toy={toy}
                               />
                           ))
                       }
                   </tbody>


               </table>
            </div>




           

        </div>
    );
};

export default MyToys;