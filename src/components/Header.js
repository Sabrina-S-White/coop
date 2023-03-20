import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../app/img/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Navbar dark className='navbar-dark' sticky="top" expand="md">
      <NavbarBrand href="/" className="ms-5">
        <img src={logo} alt="RMEOC Logo" className="float-start" />
        <h1 className="align">RMEOC Driver's Coop</h1>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

      <Collapse navbar isOpen={menuOpen}>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className="fa fa-lg fa-home" /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact">
              <i className="fa fa-lg fa-address-card" /> Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/about">
              <i className="fa fa-lg fa-info" /> About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/media">
              <i className="fa fa-lg fa-media" /> Media
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/ride">
              <i className="fa fa-lg fa-car" /> Ride
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
