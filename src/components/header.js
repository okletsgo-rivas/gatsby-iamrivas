import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { Navbar, Nav, Container } from "react-bootstrap"

import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <Navbar
    expand="md"
    sticky="top"
    className={"px-0" + (true ? "" : " scrolled")}
  >
    <Container className="p-0">
      <Navbar.Brand>
        <Link to="/">
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/projects">
            projects
          </Nav.Link>
          <Nav.Link as={Link} to="/bio">
            bio
          </Nav.Link>
          <Nav.Link as={Link} to="/resume">
            resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
