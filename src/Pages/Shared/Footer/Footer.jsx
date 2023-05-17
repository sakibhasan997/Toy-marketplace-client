import React from 'react';
import logo from '../../../assets/icons/icons.jpg'

const Footer = () => {
    return (
        <>

            <footer className='bg-gradient-to-r from-slate-600 to-slate-500 text-white'>
                <div className="footer p-10  ">
                    <div>
                        <img className='' src={logo} alt="" />
                        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div className='text-center py-8'>
                    <p>Copyright © 2023 - All right reserved by Kid-hippo</p>
                </div>
            </footer>


        </>
    );
};

export default Footer;