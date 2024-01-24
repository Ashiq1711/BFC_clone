import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
function Contact() {
  return (
    <div>
        <div>
            <h1 className=' font-font text-[#33353a] mx-auto text-center pb-20 pt-24 text-[38px]'>CONTACT US</h1>
        </div>
        <Container className=' mb-32'>
      <Row>
        <Col>
        <div className='flex place-content-evenly '>
        <FaLocationDot className='text-[#46484c] text-[32px]' />
        <div>
            <h1 className=' font-font text-[#17202A] text-[16px] tracking-[2px]'>HOUSE 56/1,</h1>
            <p className='text-[#5a646b] font-font tracking-[1px] mt-2'>Road-1, Block-C, Section -13</p>
            <p className='text-[#5a646b] font-font tracking-[1px]'>Mirpur, Dhaka-1216.</p>
        </div>
        </div>
        </Col>
        <Col>
        <div className='flex place-content-evenly '>
        <TfiEmail className='text-[#46484c] text-[32px]' />
        <div>
            <h1 className=' font-font text-[#17202A] text-[16px] tracking-[2px]'>EMAIL</h1>
            <p className='text-[#5a646b] font-font tracking-[1px] mt-2'>info@bfcbd.com</p>
            <p className='text-[#5a646b] font-font tracking-[1px]'>info@bfcbd.com
</p>
        </div>
        </div>
        </Col>
        <Col>
        <div className='flex place-content-evenly '>
        <MdOutlinePhoneIphone className='text-[#46484c] text-[32px]' />
        <div>
            <h1 className=' font-font text-[#17202A] text-[16px] tracking-[2px]'>PHONE NUMBER</h1>
            <p className='text-[#5a646b] font-font tracking-[1px] mt-2'>09666 70 77 70</p>
            <p className='text-[#5a646b] font-font tracking-[1px]'>09666 70 77 70</p>
        </div>
        </div>
        </Col>
        
      </Row>
      
    </Container>
    </div>
  )
}

export default Contact