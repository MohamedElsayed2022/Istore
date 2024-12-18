import React from 'react';
import Logo from '../assets/Academy.jpg';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-inline-block bg-light rounded text-dark  text-center" style={{ width: '100px', height: '50px', lineHeight: '50px' }}>
            <img src={Logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span className="ms-3">Istore</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
