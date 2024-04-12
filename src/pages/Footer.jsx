import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoTiktok } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='footer pt-5 pb-2'>
        <div className="container">
            <div className="socials m-0 d-flex flex-wrap align-items-center justify-content-center gap-4">
                <a href="#twiter">
                    <FaXTwitter size={20} />
                </a>
                <a href="#youtube">
                    <PiYoutubeLogoLight size={20} />
                </a>
                <a href="#insta">
                    <SlSocialInstagram size={20} />
                </a>
                <a href="#tiktok">
                <IoLogoTiktok size={20}/>
                </a>
                <a href="#thread">
                    <FaThreads size={20} />
                </a>
                <a href="#snap">
                    <FaSnapchat size={20} />
                </a>
            </div>
            <div className="other-links mt-3 my-sm-4 m-0">
                <ul className='d-md-flex  p-0 m-0  align-items-center justify-content-md-around'>
                    <li><a href="#app">Download Our App</a></li>
                    <hr  className='my-1'/>
                    <li><a href="#contact">Contact Us</a></li>
                    <hr  className='my-1'/>
                    <li><a href="#faq">FAQ</a></li>
                    <hr  className='my-1'/>
                    <li><a href="#fan">Fan page</a></li>
                    <hr  className='my-1'/>
                    <li><a href="#matches">Matches</a></li>
                    <hr  className='my-1'/>
                    <li className='m-0'><a href="#fixture">Fixtures</a></li>
                    <hr  className='my-1'/>
                    <li className='m-0'><a href="#result">Results</a></li>
                    <hr  className='my-1'/>
                    <li className='m-0'><a href="#result">Membership</a></li>
                    <hr  className='my-1'/>
                </ul>
            </div>
            <p className='text-center text-white mt-4  fw-bold'>© 2024 Classic Royals FA </p>
        </div>
    </div>
  )
}

export default Footer