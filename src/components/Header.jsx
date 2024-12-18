import React from 'react';
import Logo from '../assets/Academy.jpg';

const Header = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-dark bg-white mb-4">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <a className="navbar-brand d-flex justify-content-center mb-3 mb-md-0" href="/">
          <div
            className="bg-light rounded d-flex justify-content-center align-items-center"
            style={{ width: '100px', height: '65px' }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </a>

        <div
          className="input-group"
          style={{
            maxWidth: '500px',
            flexGrow: 1,
          }}
        >
          <input
            type="text"
            className="form-control"
            style={{ height: '45px' }}
            placeholder="Search products..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
