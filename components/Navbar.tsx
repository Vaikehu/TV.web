import * as React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-lithg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/Navbar">
        Navbar
      </a>
      <button
        className="navbar-toggler btn btn-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/Portfolio"
            >
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Blog">
              En savoir plus
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Netflix">
              Lien
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
