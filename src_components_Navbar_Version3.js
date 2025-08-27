import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-black/90 border-b border-blue/40 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-blue tracking-wide">
          Gfly Studios
        </Link>
        <button className="sm:hidden text-blue" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="32" height="32" fill="none" stroke="currentColor">
            <path d="M4 8h24M4 16h24M4 24h24" strokeWidth="2" />
          </svg>
        </button>
        <ul className="hidden sm:flex gap-8 items-center">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-white hover:text-blue transition-all duration-200 ${
                  location.pathname === link.path ? "text-blue font-semibold underline underline-offset-4" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden bg-black px-4 py-2">
          {navLinks.map(link => (
            <li key={link.path} className="py-2">
              <Link
                to={link.path}
                className={`block text-white hover:text-blue transition ${
                  location.pathname === link.path ? "text-blue font-semibold underline underline-offset-4" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}