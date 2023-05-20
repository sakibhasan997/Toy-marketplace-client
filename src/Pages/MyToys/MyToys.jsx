import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/UseTitle';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2';

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

    const handleDelete = id =>{
        const proceed = Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                    fetch(`https://assignment-11-server-site-eight.vercel.app/toys/${id}`,{
                        method: 'DELETE'
                    })
                    .then(res =>res.json())
                    .then(data =>{
                        console.log(data);
                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
            }
          })
        
        
    }
   
    return (
        <div>



            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                   
                   <thead>
                       <tr>
                           <th>Image</th>
                           <th>Seller</th>
                           <th>User Email</th>
                           <th>category</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Update</th>
                           <th>Deleted</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           toys.map((toy) => (
                               <MyToysCard
                                   key={toy?._id}
                                   toy={toy}
                                   handleDelete={handleDelete}
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