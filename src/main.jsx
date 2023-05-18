import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Route/routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <div className='max-w-[1500px] mx-auto'>
      <RouterProvider router={router} />
    </div>
    </AuthProviders>
  </React.StrictMode>,
)
