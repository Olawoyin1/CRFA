import React from 'react'

import { CiLocationOn } from "react-icons/ci";

const Fixtures = () => {
  return (
    <div>
      <div className="fixture-hero-image bg-dark text-white py-3 m-0">

        <div className="container">
            {/* <img src="../../Images/Gallery/cl15.jpg" alt="" /> */}
            <ul className='d-flex align-items-center gap-4 m-0 p-0'>
              <li><a className='nav-link' href="/fixtures">Fixtures</a></li>
              <li><a className='nav-link' href="/fixtures">Results</a></li>
              <li><a className='nav-link' href="/fixtures">Table</a></li>
            </ul>
        </div>
      </div>


      <div className="matches my-4">
        <div className="container">

          <div className="match-item mb-3">
            <div className="date-time w-75 d-flex align-items-center gap-3 p-3">
              <p>Mon 22 Apr</p>
              <p>|</p>
              <p>Isco Sport League</p>
            </div>
            <div className="match-info w-75 mx-auto">
                <div className='  d-flex align-items-center gap-3 py-2'>
                  <p className='fw-bold'>Jungle Boys</p>
                  <img src="../../Images/jungle.png" alt="" />
                  <div className="badge p-2 bg-primary">4:00</div>
                  <img src="../../Images/crfa_logo.png" alt="" />
                  <p className='fw-bold'>Classic Royals</p>
                </div>

                <div className="d-flex align-items-center w-75 mx-auto gap-1">
                  <CiLocationOn />
                  <p className="m-0 p-0">ODUDUWA COLLEGE</p>
                </div>
            </div>
          </div>
         
          <div className="match-item mb-3">
            <div className="date-time w-75 d-flex align-items-center gap-3 p-3">
              <p>Fri 26 Apr</p>
              <p>|</p>
              <p>Isco Sport League</p>
            </div>
            <div className="match-info w-75 mx-auto">
                <div className='  d-flex align-items-center gap-3 py-2'>
                  <p className='fw-bold'>Classic Royals</p>
                  <img src="../../Images/crfa_logo.png" alt="" />
                  <div className="badge p-2 bg-primary">4:00</div>
                  <img src="../../Images/volta.png" alt="" />
                  <p className='fw-bold'>Volta</p>
                </div>

                <div className="d-flex align-items-center w-75 mx-auto gap-1">
                  <CiLocationOn />
                  <p className="m-0 p-0">OAU staff school pitch</p>
                </div>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Fixtures