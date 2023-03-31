import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../../Assets/Images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="uppercase" fluid={true} rounded={true}>
      <div className="flex lg:hidden">
        <Dropdown arrowIcon={false} inline={true}></Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Brand href='/'>
        <img src={img} className="h-6 sm:h-9" alt="Green Acres Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Green <span className="bg-lime-300 px-2 font-bold text-green-600">Acres</span>
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="">
        <Navbar.Link as={Link} to="/">
          <p className="hover:bg-lime-300 hover:text-green-600 font-bold p-2 rounded">Home</p>
        </Navbar.Link>
        <Navbar.Link as={Link} to="/services">
        <p className="hover:bg-lime-300 hover:text-green-600 font-bold p-2 rounded">Services</p>
        </Navbar.Link>
        <Navbar.Link as={Link} to="/blogs">
        <p className="hover:bg-lime-300 hover:text-green-600 font-bold p-2 rounded">Blogs</p>
        </Navbar.Link>
      </Navbar.Collapse>

      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/login">
        <p className="bg-lime-300 hover:bg-lime-600 font-bold hover:text-white p-2 rounded">Login</p>
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact">
        <p className="hover:bg-lime-300 hover:text-green-600 font-bold p-2 rounded">Contact</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
