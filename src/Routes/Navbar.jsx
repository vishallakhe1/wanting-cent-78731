import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const links = [
    { to: "/login" , text: "Login"},
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
    { to: "/Course", text: "Course" }
  ];

  return (
    <div className="navbar">
      {links.map((link, index) => (
        <Link key={index} to={link.to} className="navbar-link">
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export { Navbar };
