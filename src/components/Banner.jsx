import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
function Banner() {
  return (
    <>

    
    <div className='w-full min-h-[800px] bg-cover relative'>
              <img className=' w-full h-[800px] bg-cover  ' src="public/banner1.jpg" alt="" />
              <div className=' absolute top-0 left-0 bg-black opacity-50 w-full min-h-[800px]'>
             
              </div>
              <div className=' absolute top-0 right-0 pt-4 pb-4'>
              <Navbar />             
            </div>
            <div className=' w-full absolute mx-auto text-center top-[330px] '>
                <h1 className=' text-white tracking-[7px] font-font text-[20px]'>BFC (BEST FRIED CHICKEN)</h1>
                <button className=' font-bold bg-[#c20d00] hover:bg-red-800 rounded-sm tracking-[3px] mt-4 px-[45px] py-[10px] text-[13px] shadow-xl text-white font-font'>ORDER NOW</button>
           
                <Container className=' mt-64'>
      <Row>
        <Col>
        <div className='flex justify-start '>
          <Link>
        <FaFacebookF className=' text-white text-[18px] mr-6' />
          </Link>
          <Link>
        <FaTwitter  className=' text-white text-[18px] mr-6' />
          </Link>
          <Link>
        <FaGooglePlusG  className=' text-white text-[22px] mr-6' />
          </Link>
          <Link>
        <FaLinkedinIn  className=' text-white text-[18px] mr-6' />
          </Link>
          <Link>
        <FaDribbble  className=' text-white text-[18px] mr-6' />
          </Link>
        </div>
        </Col>
        <Col>
        <div className='flex  justify-end'>
        <IoCall className='  text-white text-[16px] mr-3'  />
          <h1 className=' text-white text-[16px] font-font font-bold tracking-[3px]' >  ORDER NOW : 09666 70 77 70</h1>
        </div>
        </Col>
      </Row>
     
    </Container>
            </div>
    </div>
    </>
  )
}

export default Banner