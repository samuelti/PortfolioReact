import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        About
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#portfoliocontainer"
        onClick={() => handlePageChange('PortfolioContainer')}
        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'PortfolioContainer' ? 'nav-link active' : 'nav-link'}
      >
        Projects
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        Contact
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      >
        Resume
      </a>
    </li>
  </ul>
  );
}
