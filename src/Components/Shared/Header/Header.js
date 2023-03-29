import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../../Assets/Images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <div className="flex lg:hidden">
        <Dropdown arrowIcon={false} inline={true}></Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="uppercase">
        <Navbar.Link as={Link} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/services">
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} to="/blogs">
          Blogs
        </Navbar.Link>
      </Navbar.Collapse>

      <Navbar.Brand href="/">
        <img src={img} className="mr-3 h-6 sm:h-9" alt="Green Acres Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Green Acres
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="uppercase rounded">
        <Navbar.Link as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>
  );
};

export default Header;
