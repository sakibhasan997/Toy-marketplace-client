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
        return <div className='my-container my-32 ml-[300px]'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default Private;

