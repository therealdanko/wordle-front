import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css';
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => {
  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <LinkContainer to='/new-player'>
          <Nav.Link>New Player</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/leaderboard'>
          <Nav.Link>Leaderboard</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      </Nav>

    </div>
  )
}

export default Navbar