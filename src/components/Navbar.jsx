import React from 'react'
import Nav from 'react-bootstrap/Nav';

import Dropdown from 'react-bootstrap/Dropdown';
function Navbar() {
  return (
    <div>
 <Nav className="justify-content-end mr-5" activeKey="/home">
        <Nav.Item>
          <Nav.Link className=' mx-3 font-font hover:text-[#ffc80a]  text-[#ffc80a]  tracking-widest ' href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='mx-3  font-font text-white   tracking-widest' href="/home">ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='mx-3  font-font text-white   tracking-widest' href="/home">MENU</Nav.Link>
        </Nav.Item>
        <Dropdown>
      <Dropdown.Toggle className=' font-font tracking-widest border-none' variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        <Nav.Item>
          <Nav.Link className='mx-3  font-font text-white  tracking-widest' href="/home">SEND FEEDBACK</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='mx-3  font-font text-white  tracking-widest' eventKey="link-1">REVIEWS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='mx-3  font-font text-white  tracking-widest' eventKey="link-2">CONTACT</Nav.Link>
        </Nav.Item>
       
      </Nav>
    </div>
  )
}

export default Navbar