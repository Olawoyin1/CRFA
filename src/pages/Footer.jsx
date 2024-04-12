import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaThreads } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='footer pt-5 pb-2 bg-secondary'>
        <div className="container">
            <div className="socials m-0 d-flex flex-wrap align-items-center justify-content-center gap-4">
                <a href="#">
                    <FaXTwitter size={22} />
                </a>
                <a href="#">
                    <PiYoutubeLogoLight size={22} />
                </a>
                <a href="#">
                    <SlSocialInstagram size={22} />
                </a>
                <a href="#">
                    <PiTiktokLogoThin size={22} />
                </a>
                <a href="#">
                    <FaThreads size={22} />
                </a>
                <a href="#">
                    <FaSnapchat size={22} />
                </a>
            </div>
            <div className="other-links mt-3 my-sm-4 m-0">
                <ul className='d-md-flex  p-0 m-0  align-items-center justify-content-md-around'>
                    <li><a href="#">Download the App</a></li>
                    <hr  className='my-1'/>
                    <li><a href="#">contact us</a></li>
                    <hr  className='my-1'/>
                    <li><a href="#">FAQ</a></li>
                    <hr  className='my-1'/>
                    <li><a href="#">Fan page</a></li>
                    <hr  className='my-1'/>
                    <li><a href="#">One more</a></li>
                    <hr  className='my-1'/>
                    <li className='m-0'><a href="#">Fixtures</a></li>
                    <hr  className='my-1'/>
                </ul>
            </div>
            <p className='text-center text-white mt-4  fw-bold'>© 2024 Classic Royals FA </p>
        </div>
    </div>
  )
}

export default Footer