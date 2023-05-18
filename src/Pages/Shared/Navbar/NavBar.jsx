import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/icons.jpg'
// import { IconName } from "react-icons/fa";

const NavBar = () => {

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/allToys'>All Toys</NavLink></li>
        <li><NavLink to='/addToys'>Add Toys</NavLink></li>
        <li><NavLink to='/myToys'>My Toys</NavLink></li>



        {/* <li><Link to='/contact'>Contact</Link></li> */}
    </>

    return (
        <>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navLink}
                            </ul>
                        </div>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    <br />
                    <div className="navbar-end">
                        <>
                            <button title='LogOut' className="btn  btn-outline btn-error" >Log Out</button>
                            <Link to='/login' className="btn btn-outline btn-primary">Login</Link>
                        </>
                    </div>
                    <br />

                    <div className='ms-5 w-[55px] h-[55px]'>
                        <button> <img src="" title="hkdhfkh" className='text-[45px] w-[45px] h-[45px]  rounded-full bg-black' /></button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default NavBar;