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
           

            <div className='row row-cols-2 row-cols-sm-3 g-3 gy-5 row-cols-lg-4'>
                <div className="col">
                    <h6 className="fw-bold mb-3 text-light">COMMUNITY</h6>
                    <ul className='d-flex flex-column gap-2 p-0 m-0'>
                        <li><a href="#app">Download Our App</a></li>
                        <li><a href="fans">Fan Page</a></li>
                        <li><a href="matches">Matches</a></li>
                        <li><a href="result">Results</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h6 className="fw-bold mb-3 text-light">PAGES</h6>
                    <ul className='d-flex flex-column gap-2 p-0 m-0'>
                        <li><a href="players">Players</a></li>
                        <li><a href="news">News</a></li>
                        <li><a href="about">About Us</a></li>
                        <li><a href="news">Contact Us</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h6 className="fw-bold mb-3 text-light">QUICK LINKS</h6>
                    <ul className='d-flex flex-column gap-2 p-0 m-0'>
                        <li><a href="contact">Contact Us</a></li>
                        <li><a href="matches">Matches</a></li>
                        <li><a href="fixtures">Fixtures</a></li>
                        <li><a href="result">Results</a></li>
                    </ul>
                </div>


                <div className="col">
                    <h6 className="fw-bold mb-3 text-light">FOLLOW US</h6>
                    <ul className='d-flex flex-column gap-2 p-0 m-0'>
                        <li className='d-flex gap-2'><a href="#app"><FaXTwitter size={20} /> <small><i>Twitter</i></small></a></li>
                        <li><a href="https://www.instagram.com/classic_royals_fc/"><SlSocialInstagram size={20} /> <small><i>Instagram</i></small></a></li>
                        {/* <li><a href="#contact"><PiYoutubeLogoLight size={20} /> <small><i>Youtube</i></small></a></li> */}
                        <li><a href="#matches"><IoLogoTiktok size={20}/> <small><i>Tiktok</i></small></a></li>
                        <li><a href="#fixture"><FaThreads size={20} /> <small><i>Thread</i></small></a></li>
                    </ul>
                </div>


            </div>
            <p className='text-center text-white mt-5  fw-bold'>© 2024 Classic Royals FA </p>
        </div>
    </div>
  )
}

export default Footer