import React from 'react';

const MyToys = () => {
    return (
        <div>
            <div>

            </div>
            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>seller email </th>
                            <th>quantity</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Deleted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {/* <tr>
                            <th>
                                
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            </td>
                            <td>Available quantity</td>
                            <td>Price</td>
                            <td>Price</td>
                            <td>
                                <button className='btn btn-primary'>Updated</button>
                            </td>
                            <td>
                                <button className='btn btn-error'>Delate</button>
                            </td>
                            
                        </tr> */}
                        
                        
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyToys;