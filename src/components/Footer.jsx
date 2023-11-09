import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='-translate-y-30 '>
        <div className="content ">
          <div className="left box">
            <div className="upper">
              <div className="topic1">About Us</div>
              <div><Link to="#">Our Company</Link></div>
              <div><Link to="#">Our Team</Link></div>
              <div><Link to="#">Our Success Story</Link></div>
              <div><Link to="#">News</Link></div>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone flex">
                <Link to="#" className='flex ml-7'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>

                  +007 9089 6767</Link>
              </div>
              <div className="email">
                <Link to="#" className='flex ml-7 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className='pl-2'>
                    simsunelectricwork@gmail.com
                  </span>
                </Link>
              </div>
              <div className="address">
                <Link to="#" className='text-sm sm:text-md'>

                  <div className=' ml-[59px] '>

                    Flat No. T-1, 104, 1st Floor, Tower-1
                  </div>
                  <div className=' ml-[59px]'>
                    No. GH 01/A, Sector 16C,
                  </div>
                  <div className=' ml-[59px]'>
                    Exotica Dreamville, Greater Noida,
                  </div>
                  <div className=' ml-[59px]'>
                    U.P. 201203
                  </div>
                  {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Plot 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;
             &nbsp;   */}
                </Link>
              </div>
              <br />
            </div>
          </div>
          <div className="middle box">
            <div className="topic">Services</div>
            <div><Link to="#">New Installation Services</Link></div>
            <div><Link to="#">Annual Maintenance Services</Link></div>
            <div><Link to="#">Breakdown Services</Link></div>
          </div>
          <div className="middle box">
            <div className="topic">Product</div>
            <div><Link to="#">Lift</Link></div>
            <div><Link to="#">Escalator</Link></div>
            <div><Link to="#">Lift Spare Parts</Link></div>
            <div><Link to="#">Escalator Spare Parts</Link></div>
          </div>
          <div className="middle box">
            <div className="topic">Customer Services</div>
            <div><Link to="#">Your Orders</Link></div>
            <div><Link to="#">Returns &amp; Refunds</Link></div>
            <div><Link to="#">Manage Addresses</Link></div>
            <div><Link to="#">Payment Settings</Link></div>
            <div><Link to="#">Account Settings</Link></div>
          </div>
          <div className="right box">
            <div className="topic">Subscribe us</div>
            <form action="#">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name defaultValue="Send" />
              <div className="media-icons">
                <Link to="#"><i className="fab fa-facebook-f" /></Link>
                <Link to="#"><i className="fab fa-instagram" /></Link>
                <Link to="#"><i className="fab fa-twitter" /></Link>
                <Link to="#"><i className="fab fa-linkedin-in" /></Link>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2023  All rights reserved Simsun Electric Pvt Ltd Designed by <Link to="https://teksila.in/">Teksila.in</Link></p>
        </div>
      </footer>

    </>
  )
}

export default Footer
