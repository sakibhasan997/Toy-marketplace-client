import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BallTriangle, ColorRing } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return <div className='my-container my-60 ml-[700px]'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    }
    if (user) {
        return children
    }
    else{
        Swal.fire({
            icon: 'warning',
            title: 'User is not logged',
            text: 'You have to login first',
          })
    }
    return <Navigate state={{ from: location }}  to='/login' replace></Navigate>

        
        
    
    
};

export default Private;

