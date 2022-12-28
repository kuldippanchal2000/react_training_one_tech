import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="navbar sticky-top" expand="lg">
      <Container className="navbar-container">
        <Navbar.Toggle className="navbar-toogle" />
        <Navbar.Collapse className="text-white" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day2">
              Day2
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day3">
              Day3
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day4">
              Day4
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day5">
              Day5
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day7">
              Day7
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day8">
              Day8
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day10">
              Day10
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day11">
              Day11
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day12">
              Day12
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day13">
              Day13
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day14">
              Day14
            </Nav.Link>
            <Nav.Link className="nav-link" activeClassName="nav-link-active" as={Link} to="/day15">
              Day15
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
