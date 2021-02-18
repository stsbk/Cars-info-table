import React from 'react';
import mainLogo from './CarImage.png';
import loginLogo from './LoginImg.png';
import './Header.css';

const Header = () => {
    return (
      <div className='container mb-4 header'>
          <div className="row">
              <div className="col-1 p-2 car_logo">
                  <img src={mainLogo} alt='Car'/>
              </div>
              <div className='col-9 logo'>
                  <h5>Logo</h5>
              </div>
              <div className="col-1 p-3">
                  <p>Username</p>
              </div>
              <div className="col-1 p-3">
                  <img src={loginLogo} alt='Login'/>
              </div>
          </div>
      </div>
    );
};

export default Header;
