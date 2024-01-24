import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Gallery() {
  return (
    <div className='pt-16'>
        <div><h1 className=' font-font text-[#33353a] mx-auto text-center pb-20 pt-8 text-[38px]'>OUR GALLERY</h1></div>
 <Container className='pb-36'>
   
      <Row>
        <Col>
        <div>
            <img className=' mx-auto hover:shadow-2xl ' src="public/1.png" alt="" />
        </div>
        </Col>
        <Col>
        <div>
            <img className=' mx-auto hover:shadow-2xl ' src="public/2.png" alt="" />
        </div>
        </Col>
        <Col>
        <div>
            <img className=' mx-auto hover:shadow-2xl ' src="public/3.png" alt="" />
        </div>
        </Col>
        <Col>
        <div>
            <img className=' mx-auto hover:shadow-2xl ' src="public/4.png" alt="" />
        </div>
        </Col>
      
      </Row>
    </Container>
    </div>
  )
}

export default Gallery