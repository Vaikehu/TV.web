import * as React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          PORTFOLIO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#home">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#about">
                A propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#skills">
                Compétences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
