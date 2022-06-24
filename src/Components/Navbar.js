import * as React from 'react'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css';
import { LinkContainer } from 'react-router-bootstrap';


const Navbar = () => {
  return (
    <div>
      <Nav justify variant="tabs" > 
      {/* defaultActiveKey="/player" */}
      <Nav.Item>
        <LinkContainer to='/'>
          <Nav.Link>Player</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/game'>
          <Nav.Link>Game</Nav.Link>
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

export default Navbar;