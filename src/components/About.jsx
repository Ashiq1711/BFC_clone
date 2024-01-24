import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About() {
  return (
    <div className='pt-[48px]'>
       <Container>
      <Row>
        <Col  className='pt-[48px]'>
        <div className='mt-[70px] pb-8'>
          <h1 className=' font-font text-[30px] text-[#272525] font-bold tracking-[3px] mt-4 mb-4 '>About</h1>
          <p className='pb-4 text-[15px] font-font2 text-[#2e2e2e] tracking-[1px] leading-[30px] text-justify	'>To make chicken in a much more celebrated enjoyable and modern form, Best Fried Chicken (BFC) 
            started its journey back in 2002. Under the guidance of Anisur Rahman Sinha, an Industrialist & 
            chairman of Opex & Sinha Group, today BFC is Bangladesh's largest local fast-food chain. The birth
             of BFC is the manifestation of its founder's commitment to provide International Standard, high-quality 
             & Hygienic food at a reasonable price to the fast-food appetite of the growing consumers in Dhaka city. 
             The commitment to provide hygienic food in a decent clean environment is unwavering. The signature blend 
             of spices with which the chicken is coated is unique in taste and aroma, manufactured carefully under the 
             creative supervision of a master blender. <br /> <br />

The food chain has gained immense popularity from the patrons and to serve its growing valued customers, it has opened 22 
outlets in most of the key areas in Dhaka city including Dhanmondi, Gulshan, Banani, Badda, Uttara, Mirpur, BailyRoad, Khilgaon,
 Eskaton, Jamuna Future Park, Bashundhara City, Green Road and Motijheel. <br /><br />

Housed in a clean and customer-friendly environment with alert service staff, providing quality service to our customers is our primary 
goal. Fresh, hygienic, tasty food at an affordable price is the commitment and motto of BFC. <br /><br />

The food of BFC is liked by its Patrons. The face of a satisfied customer is our inspiration. Its phenomenal growth in sales is a testimony to its bright growth.

</p>
        </div>
        </Col>

        <Col>
        <div  className='text-left	'>
          <img src="public/ab2.png" alt="" />
        </div>
        </Col>

      </Row>
      
    </Container>
    </div>
  )
}

export default About