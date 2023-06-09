import React from 'react';
import logo from '../../../assets/icons/icons.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    Aos.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
      

    return (
        <>

            <footer className='bg-gradient-to-r from-slate-600 to-slate-500 text-white'>
                <div className="footer p-10  ">
                    <div>
                        <div data-aos="zoom-in">
                        <img className='' src={logo} alt="" />
                        </div>
                        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                        <br />
                        <br />
                        <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title font-semibold text-2xl">PRODUCTS</span>
                        <a className="link link-hover">Prices Drop</a>
                        <a className="link link-hover">New Products</a>
                        <a className="link link-hover">Best Sales</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Sitemap</a>
                    </div>
                    
                    <div>
                        <span className="footer-title font-semibold text-2xl">YOUR ACCOUNT</span>
                        <a className="link link-hover">Personal Info</a>
                        <a className="link link-hover">Orders</a>
                        <a className="link link-hover">Credit Slips</a>
                        <a className="link link-hover">Addresses</a>
                        <a className="link link-hover">Vouchers</a>
                    </div>
                    <div>
                        <span className="footer-title font-semibold text-2xl">OUR COMPANY</span>
                        <a className="link link-hover">Delivery</a>
                        <a className="link link-hover">Legal Notice</a>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Secure Payment</a>
                        <a className="link link-hover">Stores</a>
                        <br />
                        
                    </div>
                    <div>
                        <h4 className='footer-title font-semibold text-2xl'>Contact</h4>
                        
                        <div className='font-normal text-base  '>
                            <p>524 Broadway , NYC</p>
                            <br />
                            <p>+1 777 - 978 - 5570</p>
                            <br />
                        </div>

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